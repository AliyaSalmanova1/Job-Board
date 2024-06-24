import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getCompany } from '../lib/graphql/queries';

function CompanyPage() {
  const { companyId } = useParams();

  const [company, setCompany] = useState();

  useEffect(() => {
    console.log('in useeffect')
    getCompany(companyId).then((company) => setCompany(company))
    console.log('company', company)
    
  }, [companyId])

  if (!company){
    return <div>Loading...</div>
  }


  console.log('company', company)
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
    </div>
  );
}

export default CompanyPage;
