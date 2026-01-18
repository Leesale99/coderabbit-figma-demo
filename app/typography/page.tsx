import {
  Heading,
  Subheading,
  Subtitle,
  Text,
  TextSmall,
  TitleHero,
  TitlePage,
} from "@/components/typography";

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

export default function TypographyPage() {
  return (
    <div className="min-h-screen bg-default text-default">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-8 py-16">
        <section className="flex flex-col gap-6">
          <TitleHero>Typography</TitleHero>
          <Subtitle color="secondary" size="lg">
            Showcase of all typography components and variants.
          </Subtitle>
        </section>

        <section className="flex flex-col gap-4">
          <Heading size="lg">Titles</Heading>
          <div className="flex flex-col gap-4">
            <TitlePage size="lg">Title Page Large</TitlePage>
            <TitlePage>Title Page Medium</TitlePage>
            <TitlePage size="sm">Title Page Small</TitlePage>
            <Subtitle size="lg">Subtitle Large</Subtitle>
            <Subtitle>Subtitle Medium</Subtitle>
            <Subtitle size="sm">Subtitle Small</Subtitle>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <Heading size="lg">Headings</Heading>
          <div className="flex flex-col gap-3">
            <Heading size="lg">Heading Large</Heading>
            <Heading>Heading Medium</Heading>
            <Heading size="sm">Heading Small</Heading>
            <Subheading size="lg">Subheading Large</Subheading>
            <Subheading>Subheading Medium</Subheading>
            <Subheading size="sm">Subheading Small</Subheading>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <Heading size="lg">Text</Heading>
          <div className="flex flex-col gap-3">
            <Text>Body text base (body line height).</Text>
            <Text variant="strong">Body text strong.</Text>
            <Text variant="emphasis">Body text emphasis.</Text>
            <Text variant="link" as="a" href="#">
              Body text link
            </Text>
            <Text variant="input" lineHeight="single">
              Input text (single line height)
            </Text>
            <Text variant="code">const value = "code";</Text>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <Heading size="lg">Text Small</Heading>
          <div className="flex flex-col gap-2">
            <TextSmall>Text small base.</TextSmall>
            <TextSmall variant="strong">Text small strong.</TextSmall>
            <TextSmall lineHeight="single">Text small single line.</TextSmall>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <Heading size="lg">Color Variants</Heading>
          <div className="grid gap-4 md:grid-cols-2">
            {colorOptions.map((color) => (
              <div key={color} className="flex flex-col gap-2">
                <TitlePage color={color}>Title Page {color}</TitlePage>
                <Subtitle color={color}>Subtitle {color}</Subtitle>
                <Text color={color}>Text {color}</Text>
                <TextSmall color={color}>Text small {color}</TextSmall>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
