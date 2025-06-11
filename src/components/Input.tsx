interface InputProps {
  label?: string;
  type?: string;
  placeholder: string;

  referance?: any;
}

const Input = ({ label, type, placeholder, referance }: InputProps) => {
  return (
    <div>
      <label className="block mb-1 text-sm text-[#3d3f42]">{label}</label>
      <input
        type={type}
        ref={referance}
        className="w-full px-4 py-2 border border-[#e6e9e8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9492db]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
