import { Link } from "@inertiajs/react";

export default function Pagination({posts}) {
    return (
        <div className="gap-3 flex">
            {posts.links.map((link, index) => {
                const isClickable = link.url !== null;

                return isClickable ? (
                    <Link
                        href={link.url}
                        key={index}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`py-1 px-3 rounded-lg ${link.active ? "bg-sky-300" : "bg-sky-500"} hover:bg-sky-400 text-white font-bold`}
                    />
                ) : (
                    <span
                        key={index}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="bg-gray-200 py-1 px-3 rounded-lg text-gray-500 cursor-not-allowed font-bold"
                    />
                );
            })}
        </div>
    )
}