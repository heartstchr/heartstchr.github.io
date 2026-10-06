/**
 * Topic clusters for related-post linking.
 *
 * Why this exists: RelatedPosts.vue scores posts purely on exact tag overlap.
 * Most posts on this site carry 4-6 niche tags, so the highest-traffic post
 * (`/posts/transfer-github-repository/`, tagged GitHub / Repository Management
 * / Collaboration / Freelancing) shares exactly one tag with one other post and
 * rendered a single unrelated "related post" link.
 *
 * Clustering gives every post a set of topic neighbours that share subject
 * matter without sharing a literal tag string, so internal links stay
 * topically relevant instead of depending on tag vocabulary collisions.
 */

export interface PostCluster {
  id: string;
  label: string;
  /** Tags (lowercased) that belong to this cluster. */
  tags: string[];
}

/**
 * Audience / byline tags.
 *
 * These describe who a post is for, not what it is about. They still count as a
 * weak similarity signal, but they must NOT create cluster membership — otherwise
 * a post tagged "Freelancing" gets pulled toward agency and lock-in articles
 * instead of toward other repository and git content.
 */
export const audienceTags: string[] = [
  "freelancing",
  "founders",
  "collaboration",
  "business",
  "technology",
  "marketing",
  "productivity",
  "growth",
  "leadership",
  "process",
  "agile",
  "transparency",
  "communication",
  "developer-tools",
];

export const postClusters: PostCluster[] = [
  {
    id: "version-control",
    label: "Version Control & Repositories",
    tags: [
      "github",
      "repository management",
      "git",
      "version-control",
      "branch-management",
    ],
  },
  {
    id: "vue-frontend",
    label: "Vue & Static Site Development",
    tags: [
      "vue.js",
      "vue 3",
      "vue devtools",
      "create-vue",
      "vuepress",
      "portfolio",
      "static site",
      "github pages",
    ],
  },
  {
    id: "frontend-engineering",
    label: "Frontend Engineering",
    tags: [
      "micro frontends",
      "web development",
      "frontend architecture",
      "modularity",
      "javascript",
      "typescript",
      "coding",
      "css",
      "web design",
      "user experience",
      "ui/ux",
      "next.js",
      "react",
    ],
  },
  {
    id: "seo-performance",
    label: "SEO & Web Performance",
    tags: [
      "seo",
      "programmatic seo",
      "lead generation",
      "webp",
      "image optimization",
      "web performance",
      "cwebp",
    ],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    tags: [
      "ai",
      "llm",
      "gemini",
      "prompt engineering",
      "machine learning",
      "natural language processing",
      "large language models",
      "automation",
      "node.js",
    ],
  },
  {
    id: "mvp-startup",
    label: "MVP & Startup Engineering",
    tags: [
      "saas mvp",
      "mvp",
      "mvp development",
      "startup strategy",
      "engineering planning",
      "product development",
      "saas",
    ],
  },
  {
    id: "technical-advisory",
    label: "Architecture & Technical Advisory",
    tags: [
      "architecture",
      "strategy",
      "technical debt",
      "refactoring",
      "technical advisor",
      "fractional cto",
      "interim cto",
      "cto search",
      "consultancy",
      "software lifecycle",
      "maintenance",
      "post-launch",
    ],
  },
  {
    id: "vendor-outsourcing",
    label: "Vendors & Outsourcing",
    tags: [
      "vendor vetting",
      "outsourcing",
      "agency selection",
      "technical due diligence",
      "ip ownership",
      "vendor lock-in",
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure & Scalability",
    tags: [
      "infrastructure",
      "scalability",
      "cloud costs",
      "devops",
      "saas strategy",
      "clean code",
    ],
  },
  {
    id: "internal-tools",
    label: "Internal Tools & Notion Workflows",
    tags: ["internal tools", "notion"],
  },
];

const tagToClusters = new Map<string, Set<string>>();

for (const cluster of postClusters) {
  for (const tag of cluster.tags) {
    const key = tag.toLowerCase();
    const existing = tagToClusters.get(key);
    if (existing) {
      existing.add(cluster.id);
    } else {
      tagToClusters.set(key, new Set([cluster.id]));
    }
  }
}

/** Return the cluster ids a given set of tags maps to. */
export function clustersForTags(tags: string[]): Set<string> {
  const ids = new Set<string>();
  for (const tag of tags) {
    const matches = tagToClusters.get(String(tag).toLowerCase());
    if (matches) {
      for (const id of matches) ids.add(id);
    }
  }
  return ids;
}

/**
 * Inverse document frequency over a tag corpus.
 *
 * A shared tag that only one other post carries ("github", "git") says far more
 * about topical similarity than a tag shared by three posts ("freelancing").
 * Plain tag-overlap counting treats both as worth exactly 1, which is how the
 * GitHub transfer post ended up linking to SaaS lock-in articles instead of the
 * git branches post. Weighting by IDF puts the rare, specific match on top.
 */
export function buildTagIdf(corpusTags: string[][]): Map<string, number> {
  const total = corpusTags.length || 1;
  const docFreq = new Map<string, number>();

  for (const tags of corpusTags) {
    for (const tag of new Set(tags.map((t) => String(t).toLowerCase()))) {
      docFreq.set(tag, (docFreq.get(tag) ?? 0) + 1);
    }
  }

  const idf = new Map<string, number>();
  for (const [tag, freq] of docFreq) {
    idf.set(tag, Math.log(total / freq));
  }
  return idf;
}

/** Same IDF weighting, but computed over cluster membership. */
export function buildClusterIdf(corpusTags: string[][]): Map<string, number> {
  const total = corpusTags.length || 1;
  const docFreq = new Map<string, number>();

  for (const tags of corpusTags) {
    for (const clusterId of clustersForTags(tags)) {
      docFreq.set(clusterId, (docFreq.get(clusterId) ?? 0) + 1);
    }
  }

  const idf = new Map<string, number>();
  for (const [clusterId, freq] of docFreq) {
    idf.set(clusterId, Math.log(total / freq));
  }
  return idf;
}