import ContactUsPage from "./contactUs.page";
import ComplaintFormPage from "./complaintForm.page";

/**
 * 
 * @param {'contactuspage' | 'complaintFormPage'} pageName 
 * @returns { ContactUsPage | ComplaintFormPage }
 */
function pages(pageName) {
    const items = {
        contactuspage: new ContactUsPage(),
        complaintformpage: new ComplaintFormPage()
    }
    let page = pageName.toLowerCase().replace(/\s+/g, '');
    if (!page.endsWith('page')) {
        page += 'page';
    }
    if (!items[page]) {
        throw new Error(`${pageName} is not specified`);
    }
    return items[page];
}

export {
    pages,
    ContactUsPage,
    ComplaintFormPage
}