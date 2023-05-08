export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the Skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progres",
      type: "number",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(1).max(100),
    },
    {
      name: 'View',
      type: 'boolean',
      title: 'view',
      description: 'Toggle this to show or hide skill',
      initialValue: false,
      options: {
        layout: 'checkbox' // Use a checkbox layout instead of a toggle
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
