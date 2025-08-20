  const MachineHelp = ({ platformMachine, machineLink, otherplatform1, otherplatform2 }: { platformMachine: string , machineLink: string, otherplatform1?: string,  otherplatform2?: string}) => {
    return (
        <div className=" container text-start ps-3">
            <p className="pt-1 font-inter">
            Don't know what {platformMachine} you're using? Figure it out{" "}
            <a href={machineLink}
            target="_blank"
            rel="noopener noreferrer">
            here</a>.
            </p>
            <p className="pt-3 font-inter">
            NetLogo works for{" "}
            <a href={`/downloads/${otherplatform1.toLowerCase()}`} className="text-decoration-none">{otherplatform1}</a>
            {" "} and {" "}
            <a href={`/downloads/${otherplatform2.toLowerCase()}`} className="text-decoration-none">{otherplatform2}</a>
            , too.
            </p>
        </div>
    );
  };

  export default MachineHelp;