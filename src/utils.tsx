import * as yaml from "yaml";

export function readMarkdown(input: string): {
  frontMatter: Record<string, any>;
  content: string;
} {
  const frontMatterRegex = /^---\r\n([\s\S]*?)\r\n---/;
  const match = input.match(frontMatterRegex);

  if (!match) {
    return {
      frontMatter: {},
      content: input,
    };
  }
  const frontMatter = match[1];
  const content = input.slice(match[0].length).trim();

  let parsedFrontMatter: Record<string, any> = {};
  try {
    parsedFrontMatter = yaml.parse(frontMatter);
  } catch (error) {
    console.error("Error parsing front matter:", error);
  }

  return {
    frontMatter: parsedFrontMatter,
    content,
  };
}