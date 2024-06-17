type InputProps = {
    id: string;
	type: string;
    name: string;
	placeholder: string;
};

const Input = (props: InputProps) => {
	const { id, type, name, placeholder } = props;

	return <input id={id} type={type} name={name} className='w-full text-sm border rounded-md 2-full py-2 px-3 text-slate-700 placeholder:opacity-50' placeholder={placeholder} />;
};

export default Input;
