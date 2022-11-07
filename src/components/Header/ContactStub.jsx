const ContactStub = ({ icon, title, data, url }) => {
  return (
    <div className="flex items-center rounded-lg m-1 bg-slate-700 p-1 shadow-sm shadow-slate-400">
      {icon}
      <em className="text-sm mx-1">{data}</em>
    </div>
  );
};

export default ContactStub;
