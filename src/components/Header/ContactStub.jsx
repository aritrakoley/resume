const ContactStub = ({ icon, title, data, url }) => {
  return (
    <div className="min-w-max text-lg flex items-center justify-between md:justify-start rounded-lg m-1 bg-slate-700 p-1 shadow-sm shadow-slate-400 hover:shadow-md hover:shadow-slate-400">
      {icon}
      <em className="text-center mx-1">{data}</em>
    </div>
  );
};

export default ContactStub;
