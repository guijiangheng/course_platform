import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

export default function CoursePage() {
  return (
    <div className="container my-6">
      <PageHeader title="Courses">
        <Button asChild>
          <Link href="/admin/courses/new">New Course</Link>
        </Button>
      </PageHeader>
    </div>
  );
}
