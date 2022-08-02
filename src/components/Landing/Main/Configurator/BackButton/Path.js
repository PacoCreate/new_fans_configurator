const Path = (prop) => {
  return (<><path fillRule="evenodd" clipRule="evenodd" d={prop.d} fill="#3B3B3B" />
  <path fillRule="evenodd" clipRule="evenodd" d={prop.e} fill="#3B3B3B" />
  <path fillRule="evenodd" clipRule="evenodd" d={prop.f} fill="#3B3B3B" /></>);
};

export default Path;
