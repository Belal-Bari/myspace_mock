export const dynamic = 'force-dynamic';
export const revalidate = 420;

interface Post {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    //console.log('Slug-->',slug);
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    );
    //console.log('All-->', posts)
    //console.log('Params-->',params.slug)
    const post = posts.find((post) => post.slug === slug)!;
    //console.log('Post-->',post)
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}