interface Organization {
	// Will always be "Organization"
	BroadType: string;
	// Will be either "ceterms:CredentialOrganization" or "ceterms:QACredentialOrganization"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	RecordLanguage: string;
	// QAReceived (combined)
	AccreditedBy: AJAXSettings;
	AccreditedIn: [JurisdictionProfile, ...];
	// QualityAssurancePerformed
	Accredits: AJAXSettings;
	Address: [Place, ...];
	AdministrationProcess: [ProcessProfile, ...];
	AgentPurpose: Link;
	AgentPurposeDescription: string;
	AgentSectorType: Link;
	AgentType: [Link, ...];
	AlternateName: [string, ...];
	AppealProcess: [ProcessProfile, ...];
	// QAReceived (combined)
	ApprovedBy: AJAXSettings;
	ApprovedIn: [JurisdictionProfile, ...];
	// QualityAssurancePerformed
	Approves: AJAXSettings;
	AvailabilityListing: [Link, ...];
	ComplaintProcess: [ProcessProfile, ...];
	CTID: string;
	Department: AJAXSettings;
	Description: string;
	DevelopmentProcess: [ProcessProfile, ...];
	DUNS: string;
	Email: [string, ...];
	FEIN: string;
	FoundingDate: string;
	HasConditionManifest: AJAXSettings;
	HasCostManifest: AJAXSettings;
	HasVerificationService: [ProcessProfile, ...];
	Identifier: [IdentifierValue, ...];
	Image: Link;
	IndustryType: [Link, ...];
	IPEDSID: string;
	ISICV4: string;
	Jurisdiction: [JurisdictionProfile, ...];
	Keyword: [string, ...];
	LEICode: string;
	MaintenanceProcess: [ProcessProfile, ...];
	MissionAndGoalsStatement: Link;
	MissionAndGoalsStatementDescription: string;
	// Generally NAICS is merged in Industry type. So no need to display separately?
	NAICS: [string, ...];
	Name: string;
	Offers: AJAXSettings;
	OPEID: string;
	Owns: AJAXSettings;
	ParentOrganization: AJAXSettings;
	QualityAssuranceTargetType: [Link, ...];
	// QAReceived (combined)
	RecognizedBy: AJAXSettings;
	RecognizedIn: [JurisdictionProfile, ...];
	// QualityAssurancePerformed
	Recognizes: AJAXSettings;
	// QAReceived (combined)
	RegulatedBy: AJAXSettings;
	RegulatedIn: [JurisdictionProfile, ...];
	// QualityAssurancePerformed
	Regulates: AJAXSettings;
	Renews: AJAXSettings;
	ReviewProcess: [ProcessProfile, ...];
	RevocationProcess: [ProcessProfile, ...];
	Revokes: AJAXSettings;
	SameAs: [Link, ...];
	ServiceType: [Link, ...];
	SocialMedia: [Link, ...];
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
	AccreditedIn: [Place, ...];
	AdministrationProcess: [ProcessProfile, ...];
	AdvancedStandingFrom: [ConditionProfile, ...];
	AlternateName: [string, ...];
	AppealProcess: [ProcessProfile, ...];
	ApprovedBy: AJAXSettings;
	ApprovedIn: [Place, ...];
	AssessmentDeliveryType: [Link, ...];
	AudienceLevelType: [Link, ...];
	AudienceType: [Link, ...];
	AvailabilityListing: [Link, ...];
	AvailableAt: [Place, ...];
	AvailableOnlineAt: Link;
	BroadAlignment: AJAXSettings;
	CommonConditions: AJAXSettings;
	CommonCosts: AJAXSettings;
	ComplaintProcess: [ProcessProfile, ...];
	CopyrightHolder: AJAXSettings;
	Corequisite: [ConditionProfile, ...];
	CredentialId: string;
	CredentialStatusType: Link;
	CTID: string;
	DateEffective: string;
	DegreeConcentration: [Link, ...];
	DegreeMajor: [Link, ...];
	DegreeMinor: [Link, ...];
	Description: string;
	DevelopmentProcess: [ProcessProfile, ...];
	Earnings: [EarningsProfile, ...];
	EmploymentOutcome: [EmploymentOutcomeProfile, ...];
	EstimatedCost: [CostProfile, ...];
	EstimatedDuration: [DurationProfile, ...];
	ExactAlignment: AJAXSettings;
	ExpirationDate: string;
	FinancialAssistance: [FinancialAssistanceProfile, ...];
	HasPart: AJAXSettings;
	Holders: [HoldersProfile, ...];
	Identifier: [IdentifierValue, ...];
	Image: Link;
	IndustryType: [Link, ...];
	// BCP-47 language code for the credential being described, rather than the record itself. Do not confuse this with the RecordLanguage metadata property above.
	InLanguage: [string, ...];
	InstructionalProgramType: [Link, ...];
	IsAdvancedStandingFor: [ConditionProfile, ...];
	ISICV4: string;
	IsPartOf: AJAXSettings;
	IsPreparationFor: [ConditionProfile, ...];
	IsRecommendedFor: [ConditionProfile, ...];
	IsRequiredFor: [ConditionProfile, ...];
	Jurisdiction: [JurisdictionProfile, ...];
	Keyword: [string, ...];
	LatestVersion: AJAXSettings;
	LearningDeliveryType: [Link, ...];
	MaintenanceProcess: [ProcessProfile, ...];
	MajorAlignment: AJAXSettings;
	MinorAlignment: AJAXSettings;
	NAICS: string;
	Name: string;
	NarrowAlignment: AJAXSettings;
	NextVersion: AJAXSettings;
	OccupationType: [Link, ...];
	OfferedBy: AJAXSettings;
	OfferedIn: [Place, ...];
	OwnedBy: AJAXSettings;
	PreparationFrom: [ConditionProfile, ...];
	PreviousVersion: AJAXSettings;
	ProcessStandards: Link;
	ProcessStandardsDescription: string;
	RecognizedBy: AJAXSettings;
	RecognizedIn: [Place, ...];
	Recommends: [ConditionProfile, ...];
	Region: [Place, ...];
	RegulatedBy: AJAXSettings;
	RegulatedIn: [Place, ...];
	Renewal: [ConditionProfile, ...];
	RenewalFrequency: [DurationProfile, ...];
	RenewedBy: AJAXSettings;
	RenewedIn: [Place, ...];
	Requires: [ConditionProfile, ...];
	ReviewProcess: [ProcessProfile, ...];
	Revocation: [RevocationProfile, ...];
	RevocationProcess: [ProcessProfile, ...];
	RevokedBy: AJAXSettings;
	RevokedIn: [Place, ...];
	SameAs: AJAXSettings;
	Subject: [Link, ...];
	SubjectWebpage: Link;
	SupersededBy: AJAXSettings;
	Supersedes: AJAXSettings;
	TargetPathway: AJAXSettings;
	VersionIdentifier: [IdentifierValue, ...];
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
	AssertedBy: number;
	Description: string;
	GlobalJurisdiction: bool;
	JurisdictionException: [Place, ...];
	MainJurisdiction: Place;
}

interface ProcessProfile {
	DateEffective: string;
	Description: string;
	ExternalInputType: [Link, ...];
	Jurisdiction: [JurisdictionProfile, ...];
	ProcessFrequency: string;
	ProcessingAgent: AJAXSettings;
	ProcessMethod: Link;
	ProcessMethodDescription: string;
	ProcessStandards: Link;
	ProcessStandardsDescription: string;
	Region: [Place, ...];
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
	AlternativeCondition: [ConditionProfile, ...];
	AssertedBy: AJAXSettings;
	AudienceLevelType: [Link, ...];
	AudienceType: [Link, ...];
	CommonCosts: AJAXSettings;
	Condition: [string, ...];
	CreditUnitTypeDescription: string;
	CreditValue: [ValueProfile, ...];
	DateEffective: string;
	Description: string;
	EstimatedCost: [CostProfile, ...];
	Experience: string;
	Jurisdiction: [JurisdictionProfile, ...];
	MinimumAge: number;
	Name: string;
	ResidentOf: [Place, ...];
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
	CreditLevelType: [Link, ...];
	CreditUnitType: [Link, ...];
	Subject: [Link, ...];
	Description: string;
	MaxValue: number;
	MinValue: number;
	Percentage: number;
	Value: number;
}

interface CostProfile {
	AudienceType: [Link, ...];
	Condition: [string, ...];
	CostDetails: Link;
	Currency: string;
	Description: string;
	DirectCostType: [Link, ...];
	EndDate: string;
	Jurisdiction: [JurisdictionProfile, ...];
	Name: string;
	PaymentPattern: string;
	Price: number;
	Region: [Place, ...];
	ResidencyType: [Link, ...];
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
	FinancialAssistanceType: [Link, ...];
	FinancialAssistanceValue: [QuantitativeValue, ...];
	Name: string;
	SubjectWebpage: Link;
}

interface QuantitativeValue {
	Description: string;
	MaxValue: number;
	MinValue: number;
	Percentage: number;
	UnitText: [Link, ...];
	Value: number;
}

interface ConditionManifest {
	ConditionManifestOf: AJAXSettings;
	Corequisite: [ConditionProfile, ...];
	CTID: string;
	Description: string;
	EntryCondition: [ConditionProfile, ...];
	Name: string;
	Recommends: [ConditionProfile, ...];
	Renewal: [ConditionProfile, ...];
	Requires: [ConditionProfile, ...];
	SubjectWebpage: Link;
}

interface CostManifest {
	CostDetails: Link;
	CostManifestOf: Link;
	CTID: string;
	Description: string;
	EndDate: string;
	EstimatedCost: [CostProfile, ...];
	Name: string;
	StartDate: string;
}

interface EarningsProfile {
	DateEffective: string;
	HighEarnings: number;
	Jurisdiction: [JurisdictionProfile, ...];
	LowEarnings: number;
	MedianEarnings: number;
	Name: string;
	PostReceiptMonths: number;
	Region: [Place, ...];
	Source: Link;
	RelevantDataSet: AJAXSettings;
}

interface EmploymentOutcomeProfile {
	DateEffective: string;
	Description: string;
	JobsObtained: number;
	Jurisdiction: [JurisdictionProfile, ...];
	Name: string;
	Source: Link;
	RelevantDataSet: AJAXSettings;
}

interface HoldersProfile {
	DateEffective: string;
	DemographicInformation: string;
	Description: string;
	Jurisdiction: [JurisdictionProfile, ...];
	Name: string;
	NumberAwarded: number;
	Region: [Place, ...];
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
