import {notFound} from "next/navigation";
export default function courseDetail({
  params,
}: {
  params: {
    coursesId: string;
    topicId: string;
  };
}) {
  if (parseInt(params.topicId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Topic {params.topicId} for Course {params.coursesId}
    </h1>
  );
}
