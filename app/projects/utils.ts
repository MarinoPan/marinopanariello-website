import fs from 'fs'
import path from 'path'

export type ProjectMetadata = {
  title: string
  summary?: string
  year?: string
  role?: string
  stack?: string
  image?: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match ? match[1] : ''
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim() ? frontMatterBlock.trim().split('\n') : []
  const metadata: Partial<ProjectMetadata> = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = (valueArr.join(': ') || '').trim()
    value = value.replace(/^['\"](.*)['\"]$/, '$1')
    ;(metadata as any)[key.trim()] = value
  })

  return { metadata: metadata as ProjectMetadata, content }
}

function getMDXFiles(dir: string) {
  return fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
    : []
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getProjects() {
  return getMDXData(path.join(process.cwd(), 'app', 'projects', 'posts'))
}

