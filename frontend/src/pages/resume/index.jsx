import "../../output.css";

export default function ResumePage() {
  return (
    <div className="h-full w-full">
      <embed
        src="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
}
