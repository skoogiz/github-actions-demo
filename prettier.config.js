module.exports = {
    parser: "babel-ts",
    tabWidth: 4,
    trailingComma: "all",
    bracketSpacing: false,
    printWidth: 90,
    overrides: [
        {
            files: ["package.json", ".eslintrc", "babel.config.js"],
            options: {
                tabWidth: 2,
                parser: "json-stringify",
            },
        },
        {
            files: ["*.md", "*.mdx"],
            options: {
                parser: "markdown",
            },
        },
    ],
};
