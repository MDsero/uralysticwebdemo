import { UserPlus } from "lucide-react";
import rajesh from "@/assets/team/rajeshkanna.png";
import veera from "@/assets/team/veerakumar.png";
import ezhil from "@/assets/team/ezhil.png";

type Member = {
  name: string;
  role: string;
  img?: string;
  bio: React.ReactNode;
};

const members: Member[] = [
  {
    name: "R. Rajeshkanna",
    role: "CEO — Auralystic, Thanjavur",
    img: rajesh,
    bio: (
      <>
        Over <strong>7 years</strong> in enterprise networking and IT
        infrastructure — driving Auralystic's vision with precision and trust.
      </>
    ),
  },
  {
    name: "M. Veerakumar",
    role: "Managing Director",
    img: veera,
    bio: (
      <>
        Leads <strong>development & operations</strong> — turning ideas into
        scalable products with a steady, hands-on approach.
      </>
    ),
  },
  {
    name: "Ezhil",
    role: "Founder — Auralystic",
    img: ezhil,
    bio: (
      <>
        <strong>M.A. Computer Science</strong>, with <strong>6 years</strong> of
        CBSE teaching experience — the founding mind behind Auralystic.
      </>
    ),
  },
];

const placeholders = Array.from({ length: 4 });

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
              className="glass-card-elevated rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden ring-1 ring-border shadow-md grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
              <p className="text-sm text-primary italic mb-3">{m.role}</p>
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
