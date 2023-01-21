
switch(window.location.href.toString().split('#')[1]){
    case "aws": link("certificate/AWS Certified Cloud Practitioner certificate (3).pdf"); break;
    case "azureai": link("/certificate/Certificate AI Fundamental.pdf"); break;
    case "azure": link("/certificate/Microsoft Azure AZ 900 Certification.pdf"); break;
    case "gcp_30_days": link("/certificate/30 days GCP.pdf"); break;
    default : window.location.href = "https://girhe.com"; break;
}


function link(str)
{
    window.location.href=str;
}