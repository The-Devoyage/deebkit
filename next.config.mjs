import nextra from "nextra";

const withNextra = nextra({
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: "night-owl",
        light: "min-light",
      },
    },
  },
});

export default withNextra({});
