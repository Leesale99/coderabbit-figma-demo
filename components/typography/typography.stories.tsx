import * as React from "react";

import {
  Heading,
  Subheading,
  Subtitle,
  Text,
  TextSmall,
  TitleHero,
  TitlePage,
} from "./index";

const meta = {
  title: "Typography",
  parameters: {
    layout: "padded",
  },
};

export default meta;

const colorOptions = [
  "default",
  "secondary",
  "tertiary",
  "brand",
  "brand-secondary",
  "brand-tertiary",
  "danger",
  "danger-secondary",
  "danger-tertiary",
  "positive",
  "positive-secondary",
  "positive-tertiary",
  "warning",
  "warning-secondary",
  "warning-tertiary",
  "neutral",
  "neutral-secondary",
  "neutral-tertiary",
  "disabled",
] as const;

export const TitleHeroStory = {
  name: "TitleHero",
  args: {
    children: "Title Hero",
    color: "default",
    as: "h1",
  },
  argTypes: {
    color: { control: "select", options: colorOptions },
    as: { control: "select", options: ["h1", "h2", "span"] },
  },
  render: (args: React.ComponentProps<typeof TitleHero>) => (
    <TitleHero {...args} />
  ),
};

export const TitlePageStory = {
  name: "TitlePage",
  args: {
    children: "Title Page",
    size: "md",
    color: "default",
    as: "h1",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: colorOptions },
    as: { control: "select", options: ["h1", "h2", "span"] },
  },
  render: (args: React.ComponentProps<typeof TitlePage>) => (
    <TitlePage {...args} />
  ),
};

export const SubtitleStory = {
  name: "Subtitle",
  args: {
    children: "Subtitle",
    size: "md",
    color: "default",
    as: "p",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: colorOptions },
    as: { control: "select", options: ["p", "span", "h2"] },
  },
  render: (args: React.ComponentProps<typeof Subtitle>) => (
    <Subtitle {...args} />
  ),
};

export const HeadingStory = {
  name: "Heading",
  args: {
    children: "Heading",
    size: "md",
    color: "default",
    as: "h2",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: colorOptions },
    as: { control: "select", options: ["h1", "h2", "h3", "h4"] },
  },
  render: (args: React.ComponentProps<typeof Heading>) => <Heading {...args} />,
};

export const SubheadingStory = {
  name: "Subheading",
  args: {
    children: "Subheading",
    size: "md",
    color: "default",
    as: "h3",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: colorOptions },
    as: { control: "select", options: ["h3", "h4", "h5", "h6"] },
  },
  render: (args: React.ComponentProps<typeof Subheading>) => (
    <Subheading {...args} />
  ),
};

export const TextStory = {
  name: "Text",
  args: {
    children: "Body text base",
    variant: "base",
    size: "md",
    lineHeight: "body",
    color: "default",
    as: "p",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["base", "strong", "emphasis", "link", "input", "code"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    lineHeight: { control: "select", options: ["body", "single"] },
    color: { control: "select", options: colorOptions },
    as: { control: "select", options: ["p", "span", "strong", "em", "a", "code"] },
  },
  render: (args: React.ComponentProps<typeof Text>) => (
    <Text {...args} href={args.as === "a" ? "#" : undefined} />
  ),
};

export const TextSmallStory = {
  name: "TextSmall",
  args: {
    children: "Text small base",
    variant: "base",
    lineHeight: "body",
    color: "default",
    as: "p",
  },
  argTypes: {
    variant: { control: "select", options: ["base", "strong"] },
    lineHeight: { control: "select", options: ["body", "single"] },
    color: { control: "select", options: colorOptions },
    as: { control: "select", options: ["p", "span", "strong", "label"] },
  },
  render: (args: React.ComponentProps<typeof TextSmall>) => (
    <TextSmall {...args} />
  ),
};
