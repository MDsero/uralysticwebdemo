import { UserPlus } from "lucide-react";
import rajesh from "@/assets/team/rajeshkanna.png";
import veera from "@/assets/team/veerakumar.png";
import ezhil from "@/assets/team/ezhil.png";
import harini from "@/assets/team/harini.jpeg";
import dinesh from "@/assets/team/anghuswamy.jpeg";
import anghuswamy from "@/assets/team/dinesh.jpeg";

type Member = {
  name: string;
  role: string;
  img?: string;
  bio: React.ReactNode;
};

const members: Member[] = [
  {
    name: "Ezhil",
    role: "Founder — Auralystic",
    img: ezhil,
    bio: (
      <>
        <strong>M.A. Computer Science</strong>, with <strong>6 years</strong> of
        experience — the founding mind behind Auralystic.
      </>
    ),
  },
  {
    name: "M. Veerakumar",
    role: "Managing Director — Auralystic, Thanjavur",
    img: veera,
    bio: (
      <>
        Leads <strong>development & operations</strong> — turning ideas into
        scalable products with a steady, hands-on approach.
      </>
    ),
  },
  {
    name: "R. Rajeshkanna",
    role: "Chief Executive Officer — Auralystic, Thanjavur",
    img: rajesh,
    bio: (
      <>
        Blending <strong>technology, business vision</strong> and decision-making
        to power growth with confidence and style.
      </>
    ),
  },
  {
    name: "Harini Balakrishnan",
    role: "Business Development Executive",
    img: harini,
    bio: (
      <>
        Driving <strong>client partnerships & growth strategy</strong> — bridging
        client vision with engineering execution.
      </>
    ),
  },
  {
    name: "Anghuswamy",
    role: "Lead — Cloud, Azure & Network Security",
    img: anghuswamy,
    bio: (
      <>
        Architects <strong>secure cloud infrastructure</strong> on Azure with
        enterprise-grade network security and zero-trust principles.
      </>
    ),
  },
  {
    name: "Dinesh",
    role: "Lead — UI / UX & Web Design",
    img: dinesh,
    bio: (
      <>
        Heads <strong>product design & user experience</strong> — crafting
        intuitive, luxury-grade interfaces that convert.
      </>
    ),
  },
];

const placeholders = Array.from({ length: 2 });

const LeadershipSection = () => {
  return (
    <section className="py-20 md:py-28 section-gradient-alt noise-overlay">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The people behind Auralystic — building "Simply Advanced" technology
            with clarity and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {members.map((m) => (
            <div
              key={m.name}
              className="group relative rounded-2xl p-6 text-center bg-gradient-to-b from-white to-sky-50/40 border border-white/80 shadow-[0_10px_30px_-12px_rgba(14,165,233,0.25),0_2px_6px_-2px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_50px_-16px_rgba(14,165,233,0.4),0_4px_10px_-2px_rgba(15,23,42,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <div className="relative w-36 h-36 mx-auto mb-5">
                <div className="absolute -inset-1 rounded-2xl sky-gradient opacity-90 blur-[2px] group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_24px_-8px_rgba(14,165,233,0.5)]">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground tracking-tight">{m.name}</h3>
              <p className="text-sm text-primary font-medium italic mb-3">{m.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {m.bio}
              </p>
            </div>
          ))}

          {placeholders.map((_, i) => (
            <div
              key={`ph-${i}`}
              className="rounded-2xl p-5 text-center border-2 border-dashed border-border bg-card/40 flex flex-col items-center justify-center min-h-[280px]"
            >
              <div className="w-32 h-32 mb-4 rounded-2xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground/60">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="text-base font-semibold text-muted-foreground">
                Coming Soon
              </h3>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Team member
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
