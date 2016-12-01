"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var company_model_1 = require('./company.model');
var contact_type_1 = require("./contact-type");
var identifiable_model_1 = require("./identifiable.model");
var JobApplication = (function (_super) {
    __extends(JobApplication, _super);
    function JobApplication(applicationJson) {
        _super.call(this, applicationJson);
        applicationJson = applicationJson || {};
        this.company = applicationJson.company || new company_model_1.Company();
        this.tag = applicationJson.tag || '';
        this.position = applicationJson.position || '';
        this.appliedTo = applicationJson.appliedTo || false;
        this.contactType = applicationJson.contactType || new contact_type_1.ContactType();
        this.contactInfo = applicationJson.contactInfo || '';
        this.dateApplied = applicationJson.dateApplied || new Date();
        this.followUp = applicationJson.followUp || null;
        this.applicationFiles = applicationJson.applicationFiles || null;
        this.notes = applicationJson.notes || '';
    }
    return JobApplication;
}(identifiable_model_1.Identifiable));
exports.JobApplication = JobApplication;
//# sourceMappingURL=job-application.model.js.map