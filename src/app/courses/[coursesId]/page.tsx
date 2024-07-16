export default function CourseDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about course {params.productId}</h1>;
}