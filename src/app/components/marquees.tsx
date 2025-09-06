import { cn } from "@/lib/utils";
import Marquee from "@/components/core/marquee";

const reviews = [
  {
    name: "Hemant",
    username: "@Hemant",
    body: "Absolutely love the quality of these bags!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Dimple",
    username: "@Dimple",
    body: "I’ve been using these bags for months, and they still look brand new.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Khushi",
    username: "@Khushi",
    body: "Great alternative to plastic bags. I love the variety of designs available.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Mansi",
    username: "@Mansi",
    body: "Best decision to switch to non-woven bags. The print quality is excellent",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Robin",
    username: "@Robin",
    body: "These bags are a game changer. Perfect for grocery shopping",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Het",
    username: "@Het",
    body: "The customization options for branding are also amazing.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border-2 border-black p-4",
        // light styles
        "",
        // dark styles
        "dark:border-black/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-cream py-10">
      <Marquee pauseOnHover className="marquee">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="marqueeOposite">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div> */}
    </div>
  );
};

export default MarqueeDemo;
