import { Students, Admin, Teachers, Parents } from "../models/index.js";

export async function getAllEmails() {
  const allEmails = await Promise.all([
    Students.findAll({ attributes: [`email`, `role`] }),
    Admin.findAll({ attributes: [`email`, `role`] }),
    Teachers.findAll({ attributes: [`email`, `role`] }),
    Parents.findAll({ attributes: [`email`, `role`] }),
  ]);
  const unedEmails = [].concat(...allEmails);
  console.log(unedEmails);
  // return unedEmails;
  const filterEmails = filteredEmails(unedEmails);
  console.log(filterEmails);
  return filterEmails;
}
export function filteredEmails(emails) {
  return emails.map(({ dataValues: { email, role } }) => ({ email, role }));
}
