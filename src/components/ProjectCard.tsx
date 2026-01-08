export default function ProjectCard({ title = 'Project' }) {
  return (
    <article className="flex h-[220px] w-[220px] -translate-y-[60px] flex-col justify-between rounded-[3px] bg-[#347a2e] p-[18px] text-[#071014] shadow-[0_6px_18px_rgba(0,0,0,0.18)] max-[840px]:h-[200px] max-[840px]:w-[180px] max-[840px]:-translate-y-[40px]">
      <div className="text-[1.15rem] font-semibold">{title}</div>
      <div className="self-end">
        <button className="w-fit rounded-lg bg-white px-3 py-1.5 font-bold text-[#111827] shadow-[0_6px_12px_rgba(0,0,0,0.12)]">
          Explore
        </button>
      </div>
    </article>
  );
}
