type Topics = Record<"topics_title" | "topics_description", string>;
type PBooks = Record<
  "book_author" | "book_url" | "book_title" | "book_image",
  string
>;
type Videos = Record<"video_title" | "video_url", string>;
type QNA = Record<"qna_url" | "question_n_answers", string>;

export type TCoursePage = {
  course_title: string;
  course_code: string;
  introduction: string;
  topics: Topics[];
  popular_books: PBooks[];
  videos: Videos[];
  qna: QNA[];
};

export type CourseResponse = {
  courses: TCoursePage[];
};

export type UpdatedCourse = Record<
  "first" | "second" | "third" | "fourth",
  CourseResponse
>;
