import _ from "lodash";

const applicationSearchConstants = {

}


export const applicationType = [
    { label: "Membership", value: "membership" },
    { label: "CPD Event", value: "cpdEvent" },
    { label: "CPD Provider", value: "cpdProvider" },
];

const Labels = ["Started", "Submitted", "Approved", "Rejected", "Paid", "Awaiting Activation", "Completed", "Cancelled"];
export const applicationStatus = _.map(Labels, (row: string) => ({
    label: row, value: _.lowerCase(_.replace(row, ' ', ''))
}));

export default applicationSearchConstants;