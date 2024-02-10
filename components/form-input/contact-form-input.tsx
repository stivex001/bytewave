type ContactText = {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  icon?: React.JSX.Element | null;
  onBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  onChange: {
    (e: React.ChangeEvent<any>): void;
  };
};

const ContactTextInput = ({
  label,
  name,
  id,
  placeholder,
  icon,
  onBlur,
  onChange,
}: ContactText) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[12] font-medium">{label}</label>
      <div className="h-10 w-full rounded-[27px] shadow-[0px_3px_10px_0px_rgba(8,15,52,0.06)] px-5 flex items-center justify-between gap-2">
        <input
          type="text"
          className="outline-none h-full w-full"
          placeholder={placeholder}
          name={name}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
        ></input>
        <div className="w-2">{icon}</div>
      </div>
    </div>
  );
};

export default ContactTextInput;
