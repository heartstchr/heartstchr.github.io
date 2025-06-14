<template>
    <div v-if="content" class="markdown-content">
        <div v-html="content"></div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vuepress/client'

export default {
    props: ['src'],
    setup(props) {
        const content = ref(null)
        const { site } = useData()

        const loadContent = async () => {
            try {
                if (!props.src) return

                // Get the markdown content from the frontmatter
                const projectDetails = site.value.frontmatter.project?.details
                if (projectDetails) {
                    content.value = projectDetails
                }
            } catch (error) {
                console.error('Error loading markdown:', error)
            }
        }

        onMounted(loadContent)
        watch(() => props.src, loadContent)

        return {
            content
        }
    }
}
</script>

<style>
.markdown-content {
    padding: 1rem;
    line-height: 1.6;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
}

.markdown-content p {
    margin-bottom: 1em;
}

.markdown-content ul,
.markdown-content ol {
    margin-bottom: 1em;
    padding-left: 2em;
}

.markdown-content code {
    background-color: #f5f5f5;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
}

.markdown-content pre {
    background-color: #f5f5f5;
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    margin-bottom: 1em;
}

.markdown-content pre code {
    background-color: transparent;
    padding: 0;
}

.markdown-content blockquote {
    border-left: 4px solid #ddd;
    padding-left: 1em;
    margin-left: 0;
    color: #666;
}

.markdown-content img {
    max-width: 100%;
    height: auto;
}

.markdown-content table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1em;
}

.markdown-content th,
.markdown-content td {
    border: 1px solid #ddd;
    padding: 0.5em;
}

.markdown-content th {
    background-color: #f5f5f5;
}
</style>