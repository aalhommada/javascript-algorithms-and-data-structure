import style from "./tags.module.css";

interface TagsProps {
  tagItems: string[];
}

export function Tags(props: TagsProps) {
  return (
    <div className={style.tagsContainer}>
      {props.tagItems.map((tag, index) => {
        return (
          <p key={`tag-index-${index}`} className={style.tagItem}>
            {tag}
          </p>
        );
      })}
    </div>
  );
}
