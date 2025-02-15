import { ScrollArea } from "@/components/ui/scroll-area";

const ListView = ({ records, handleOpen }) => {
  return (
    <ScrollArea className="xl:px-20 xl:h-[350px] h-[600px] w-full">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {records.map((item, index) => {
          return (
            <div key={index} onClick={() => handleOpen(item.link)}>
              <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer group">
                <h3 className="text-xl max-w[260px] min-h-[60px] text-center lg:text-left group-hover:text-accent-default">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3">
                  <p className="text-white/60">
                    {item.description.length > 90
                      ? item.description.slice(0, 90) + "..."
                      : item.description}
                  </p>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </ScrollArea>
  );
};

export default ListView;
