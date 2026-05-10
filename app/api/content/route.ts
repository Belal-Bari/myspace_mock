const posts = [
    {
        title: 'Getting Started with JavaScript',
        slug: 'getting-started-with-javascript',
        content: 'This post introduces the basics of JavaScript, including variables, data types, and simple functions.',
    },
    {
        title: 'Understanding React Components',
        slug: 'understanding-react-components',
        content: 'Learn how React components work, including functional and class components, props, and state.',
    },
    {
        title: 'A Guide to Node.js Basics',
        slug: 'guide-to-nodejs-basics',
        content: 'This article covers the fundamentals of Node.js, including modules, file system operations, and building a simple server.',
    },
    {
        title: 'Introduction to Express.js',
        slug: 'introduction-to-expressjs',
        content: 'Explore how to build web applications using Express.js, including routing and middleware concepts.',
    },
    {
        title: 'Working with REST APIs',
        slug: 'working-with-rest-apis',
        content: 'Understand how to create and consume RESTful APIs, including HTTP methods, endpoints, and JSON data handling.',
    }
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {

    const session = await getServerSession()

    return NextResponse.json(posts);
}