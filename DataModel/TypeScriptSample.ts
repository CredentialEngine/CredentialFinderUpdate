interface Organization {
	// Will always be "Organization"
	BroadType: string;
	// Will be either "ceterms:CredentialOrganization" or "ceterms:QACredentialOrganization"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	RecordLanguage: string;
	// QAReceived (combined)
	AccreditedBy: AJAXSettings;
	AccreditedIn: Array<JurisdictionProfile>;
	// QualityAssurancePerformed
	Accredits: AJAXSettings;
	Address: Array<Place>;
	AdministrationProcess: Array<ProcessProfile>;
	AgentPurpose: Link;
	AgentPurposeDescription: string;
	AgentSectorType: Link;
	AgentType: Array<Link>;
	AlternateName: Array<string>;
	AppealProcess: Array<ProcessProfile>;
	// QAReceived (combined)
	ApprovedBy: AJAXSettings;
	ApprovedIn: Array<JurisdictionProfile>;
	// QualityAssurancePerformed
	Approves: AJAXSettings;
	AvailabilityListing: Array<Link>;
	ComplaintProcess: Array<ProcessProfile>;
	CTID: string;
	Department: AJAXSettings;
	Description: string;
	DevelopmentProcess: Array<ProcessProfile>;
	DUNS: string;
	Email: Array<string>;
	FEIN: string;
	FoundingDate: string;
	HasConditionManifest: AJAXSettings;
	HasCostManifest: AJAXSettings;
	HasVerificationService: Array<VerificationServiceProfile>;
	Identifier: Array<IdentifierValue>;
	Image: Link;
	IndustryType: Array<Link>;
	IPEDSID: string;
	ISICV4: string;
	Jurisdiction: Array<JurisdictionProfile>;
	Keyword: Array<string>;
	LEICode: string;
	MaintenanceProcess: Array<ProcessProfile>;
	MissionAndGoalsStatement: Link;
	MissionAndGoalsStatementDescription: string;
	// Generally NAICS is merged in Industry type. So no need to display separately?
	NAICS: Array<string>;
	Name: string;
	Offers: AJAXSettings;
	OPEID: string;
	Owns: AJAXSettings;
	ParentOrganization: AJAXSettings;
	QualityAssuranceTargetType: Array<Link>;
	// QAReceived (combined)
	RecognizedBy: AJAXSettings;
	RecognizedIn: Array<JurisdictionProfile>;
	// QualityAssurancePerformed
	Recognizes: AJAXSettings;
	// QAReceived (combined)
	RegulatedBy: AJAXSettings;
	RegulatedIn: Array<JurisdictionProfile>;
	// QualityAssurancePerformed
	Regulates: AJAXSettings;
	// Same as Owns/Offers link
	Renews: AJAXSettings;
	ReviewProcess: Array<ProcessProfile>;
	RevocationProcess: Array<ProcessProfile>;
	// Same as Owns/Offers link
	Revokes: AJAXSettings;
	SameAs: Array<Link>;
	ServiceType: Array<Link>;
	SocialMedia: Array<Link>;
	SubjectWebpage: Link;
	SubOrganization: AJAXSettings;
	TransferValueStatement: Link;
	TransferValueStatementDescription: string;
}

interface Credential {
	// Will always be "Credential"
	BroadType: string;
	// Will be the Shorthand URI for one of the subclasses of ceterms:Credential (See "Credential and Subclasses": https://credreg.net/ctdl/terms#groups )
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	RecordLanguage: string;
	AccreditedBy: AJAXSettings;
	AccreditedIn: Array<Place>;
	AdministrationProcess: Array<ProcessProfile>;
	AdvancedStandingFrom: Array<ConditionProfile>;
	AlternateName: Array<string>;
	AppealProcess: Array<ProcessProfile>;
	ApprovedBy: AJAXSettings;
	ApprovedIn: Array<Place>;
	AssessmentDeliveryType: Array<Link>;
	AudienceLevelType: Array<Link>;
	AudienceType: Array<Link>;
	AvailabilityListing: Array<Link>;
	AvailableAt: Array<Place>;
	AvailableOnlineAt: Link;
	BroadAlignment: AJAXSettings;
	CommonConditions: AJAXSettings;
	CommonCosts: AJAXSettings;
	ComplaintProcess: Array<ProcessProfile>;
	CopyrightHolder: AJAXSettings;
	Corequisite: Array<ConditionProfile>;
	CredentialId: string;
	CredentialStatusType: Link;
	CTID: string;
	DateEffective: string;
	DegreeConcentration: Array<Link>;
	DegreeMajor: Array<Link>;
	DegreeMinor: Array<Link>;
	Description: string;
	DevelopmentProcess: Array<ProcessProfile>;
	Earnings: Array<EarningsProfile>;
	EmploymentOutcome: Array<EmploymentOutcomeProfile>;
	EstimatedCost: Array<CostProfile>;
	EstimatedDuration: Array<DurationProfile>;
	ExactAlignment: AJAXSettings;
	ExpirationDate: string;
	FinancialAssistance: Array<FinancialAssistanceProfile>;
	HasPart: AJAXSettings;
	Holders: Array<HoldersProfile>;
	Identifier: Array<IdentifierValue>;
	Image: Link;
	IndustryType: Array<Link>;
	// BCP-47 language code for the credential being described, rather than the record itself. Do not confuse this with the RecordLanguage metadata property above.
	InLanguage: Array<string>;
	InstructionalProgramType: Array<Link>;
	IsAdvancedStandingFor: Array<ConditionProfile>;
	ISICV4: string;
	IsPartOf: AJAXSettings;
	IsPreparationFor: Array<ConditionProfile>;
	IsRecommendedFor: Array<ConditionProfile>;
	IsRequiredFor: Array<ConditionProfile>;
	Jurisdiction: Array<JurisdictionProfile>;
	Keyword: Array<string>;
	LatestVersion: AJAXSettings;
	LearningDeliveryType: Array<Link>;
	MaintenanceProcess: Array<ProcessProfile>;
	MajorAlignment: AJAXSettings;
	MinorAlignment: AJAXSettings;
	NAICS: string;
	Name: string;
	NarrowAlignment: AJAXSettings;
	NextVersion: AJAXSettings;
	OccupationType: Array<Link>;
	OfferedBy: AJAXSettings;
	OfferedIn: Array<Place>;
	OwnedBy: AJAXSettings;
	PreparationFrom: Array<ConditionProfile>;
	PreviousVersion: AJAXSettings;
	ProcessStandards: Link;
	ProcessStandardsDescription: string;
	RecognizedBy: AJAXSettings;
	RecognizedIn: Array<Place>;
	Recommends: Array<ConditionProfile>;
	Region: Array<Place>;
	RegulatedBy: AJAXSettings;
	RegulatedIn: Array<Place>;
	Renewal: Array<ConditionProfile>;
	RenewalFrequency: Array<DurationProfile>;
	RenewedBy: AJAXSettings;
	RenewedIn: Array<Place>;
	Requires: Array<ConditionProfile>;
	ReviewProcess: Array<ProcessProfile>;
	Revocation: Array<RevocationProfile>;
	RevocationProcess: Array<ProcessProfile>;
	RevokedBy: AJAXSettings;
	RevokedIn: Array<Place>;
	SameAs: AJAXSettings;
	Subject: Array<Link>;
	SubjectWebpage: Link;
	SupersededBy: AJAXSettings;
	Supersedes: AJAXSettings;
	TargetPathway: AJAXSettings;
	VersionIdentifier: Array<IdentifierValue>;
}

interface Link {
	// Displayed label. May not always be present.
	Label: string;
	// URL to link to. May lead to another website, a prefiltered search, a detail page, etc.
	URL: string;
	// Description of the item. Only present in rare cases when needed.
	Description: string;
}

interface JurisdictionProfile {
	AssertedBy: AJAXSettings;
	Description: string;
	GlobalJurisdiction: boolean;
	JurisdictionException: Array<Place>;
	MainJurisdiction: Place;
}

interface ProcessProfile {
	DateEffective: string;
	Description: string;
	ExternalInputType: Array<Link>;
	Jurisdiction: Array<JurisdictionProfile>;
	ProcessFrequency: string;
	ProcessingAgent: AJAXSettings;
	ProcessMethod: Link;
	ProcessMethodDescription: string;
	ProcessStandards: Link;
	ProcessStandardsDescription: string;
	Region: Array<Place>;
	ScoringMethodDescription: string;
	ScoringMethodExample: Link;
	ScoringMethodExampleDescription: string;
	SubjectWebpage: Link;
	TargetAssessment: AJAXSettings;
	TargetCompetencyFramework: AJAXSettings;
	TargetCredential: AJAXSettings;
	TargetLearningOpportunity: AJAXSettings;
	VerificationMethodDescription: string;
}

interface IdentifierValue {
	IdentifierType: string;
	IdentifierTypeName: string;
	IdentifierValueCode: string;
}

interface ConditionProfile {
	AlternativeCondition: Array<ConditionProfile>;
	AssertedBy: AJAXSettings;
	AudienceLevelType: Array<Link>;
	AudienceType: Array<Link>;
	CommonCosts: AJAXSettings;
	Condition: Array<string>;
	CreditUnitTypeDescription: string;
	CreditValue: Array<ValueProfile>;
	DateEffective: string;
	Description: string;
	EstimatedCost: Array<CostProfile>;
	Experience: string;
	Jurisdiction: Array<JurisdictionProfile>;
	MinimumAge: number;
	Name: string;
	ResidentOf: Array<Place>;
	SubjectWebpage: Link;
	SubmissionOf: Link;
	SubmissionOfDescription: string;
	TargetAssessment: AJAXSettings;
	TargetCompetency: AJAXSettings;
	TargetCredential: AJAXSettings;
	TargetLearningOpportunity: AJAXSettings;
	Weight: number;
	YearsOfExperience: number;
}

interface ValueProfile {
	CreditLevelType: Array<Link>;
	CreditUnitType: Array<Link>;
	Subject: Array<Link>;
	Description: string;
	MaxValue: number;
	MinValue: number;
	Percentage: number;
	Value: number;
}

interface CostProfile {
	AudienceType: Array<Link>;
	Condition: Array<string>;
	CostDetails: Link;
	Currency: string;
	Description: string;
	DirectCostType: Array<Link>;
	EndDate: string;
	Jurisdiction: Array<JurisdictionProfile>;
	Name: string;
	PaymentPattern: string;
	Price: number;
	Region: Array<Place>;
	ResidencyType: Array<Link>;
	StartDate: string;
}

interface DurationProfile {
	Description: string;
	ExactDuration: Duration;
	MaximumDuration: Duration;
	MinimumDuration: Duration;
}

interface Duration {
	Years: number;
	Months: number;
	Weeks: number;
	Days: number;
	Hours: number;
	Minutes: number;
	Seconds: number;
}

interface FinancialAssistanceProfile {
	Description: string;
	FinancialAssistanceType: Array<Link>;
	FinancialAssistanceValue: Array<QuantitativeValue>;
	Name: string;
	SubjectWebpage: Link;
}

interface QuantitativeValue {
	Description: string;
	MaxValue: number;
	MinValue: number;
	Percentage: number;
	UnitText: Array<Link>;
	Value: number;
}

interface ConditionManifest {
	ConditionManifestOf: AJAXSettings;
	Corequisite: Array<ConditionProfile>;
	CTID: string;
	Description: string;
	EntryCondition: Array<ConditionProfile>;
	Name: string;
	Recommends: Array<ConditionProfile>;
	Renewal: Array<ConditionProfile>;
	Requires: Array<ConditionProfile>;
	SubjectWebpage: Link;
}

interface CostManifest {
	CostDetails: Link;
	CostManifestOf: Link;
	CTID: string;
	Description: string;
	EndDate: string;
	EstimatedCost: Array<CostProfile>;
	Name: string;
	StartDate: string;
}

interface EarningsProfile {
	DateEffective: string;
	HighEarnings: number;
	Jurisdiction: Array<JurisdictionProfile>;
	LowEarnings: number;
	MedianEarnings: number;
	Name: string;
	PostReceiptMonths: number;
	Region: Array<Place>;
	Source: Link;
	RelevantDataSet: AJAXSettings;
}

interface EmploymentOutcomeProfile {
	DateEffective: string;
	Description: string;
	JobsObtained: number;
	Jurisdiction: Array<JurisdictionProfile>;
	Name: string;
	Source: Link;
	RelevantDataSet: AJAXSettings;
}

interface HoldersProfile {
	DateEffective: string;
	DemographicInformation: string;
	Description: string;
	Jurisdiction: Array<JurisdictionProfile>;
	Name: string;
	NumberAwarded: number;
	Region: Array<Place>;
	Source: Link;
	RelevantDataSet: AJAXSettings;
}

interface AJAXSettings {
	// Label used for display
	Label: string;
	// Pre-determined total number of results for this AJAX request. If present and greater than 0, execute the request; otherwise, ignore it.
	Total: number;
	// Generic JSON object containing any relevant query data to pass to the server when executing the request.
	QueryData: Object;
}

interface VerificationServiceProfile {
	DateEffective: string;
	Description: string;
	EstimatedCost: Array<AJAXSettings>;
	HolderMustAuthorize: boolean;
	Jurisdiction: Array<JurisdictionProfile>;
	OfferedBy: AJAXSettings;
	OfferedIn: Array<JurisdictionProfile>;
	Region: Array<Place>;
	SubjectWebpage: Link;
	TargetCredential: AJAXSettings;
	VerificationDirectory: Link;
	VerificationMethodDescription: string;
	VerificationService: AJAXSettings;
	VerifiedClaimType: AJAXSettings;
}
