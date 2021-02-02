interface Organization {
	// Will always be "Organization"
	BroadType: [string, ...];
	// Will be either "ceterms:CredentialOrganization" or "ceterms:QACredentialOrganization"
	CTDLType: [string, ...];
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	RecordLanguage: [string, ...];
	AccreditedBy: [{Link}, ...];
	AccreditedIn: [{JurisdictionProfile}, ...];
	Accredits: [{Link}, ...];
	Address: [{Place}, ...];
	AdministrationProcess: [{ProcessProfile}, ...];
	AgentPurpose: [{Link}, ...];
	AgentPurposeDescription: [string, ...];
	AgentSectorType: [{Link}, ...];
	AgentType: [{Link}, ...];
	AlternateName: [string, ...];
	AppealProcess: [{ProcessProfile}, ...];
	ApprovedBy: [{Link}, ...];
	ApprovedIn: [{JurisdictionProfile}, ...];
	Approves: [{Link}, ...];
	AvailabilityListing: [{Link}, ...];
	ComplaintProcess: [{ProcessProfile}, ...];
	CTID: [string, ...];
	Department: [{Link}, ...];
	Description: [string, ...];
	DevelopmentProcess: [{ProcessProfile}, ...];
	DUNS: [string, ...];
	Email: [string, ...];
	FEIN: [string, ...];
	FoundingDate: [string, ...];
	HasConditionManifest: [{ConditionManifest}, ...];
	HasCostManifest: [{CostManifest}, ...];
	HasVerificationService: [{ProcessProfile}, ...];
	Identifier: [{IdentifierValue}, ...];
	Image: [{Link}, ...];
	IndustryType: [{Link}, ...];
	IPEDSID: [string, ...];
	ISICV4: [string, ...];
	Jurisdiction: [{JurisdictionProfile}, ...];
	Keyword: [string, ...];
	LEICode: [string, ...];
	MaintenanceProcess: [{ProcessProfile}, ...];
	MissionAndGoalsStatement: [{Link}, ...];
	MissionAndGoalsStatementDescription: [string, ...];
	// Generally NAICS is merged in Industry type. So no need to display separately?
	NAICS: [string, ...];
	Name: [string, ...];
	Offers: [{Link}, ...];
	OPEID: [string, ...];
	Owns: [{Link}, ...];
	ParentOrganization: [{Link}, ...];
	QualityAssuranceTargetType: [{Link}, ...];
	RecognizedBy: [{Link}, ...];
	RecognizedIn: [{JurisdictionProfile}, ...];
	Recognizes: [{Link}, ...];
	RegulatedBy: [{Link}, ...];
	RegulatedIn: [{JurisdictionProfile}, ...];
	Regulates: [{Link}, ...];
	Renews: [{Link}, ...];
	ReviewProcess: [{ProcessProfile}, ...];
	RevocationProcess: [{ProcessProfile}, ...];
	Revokes: [{Link}, ...];
	SameAs: [{Link}, ...];
	ServiceType: [{Link}, ...];
	SocialMedia: [{Link}, ...];
	SubjectWebpage: [{Link}, ...];
	SubOrganization: [{Link}, ...];
	TransferValueStatement: [{Link}, ...];
	TransferValueStatementDescription: [string, ...];
}

interface Link {
	// Displayed label. May not always be present.
	Label: [string, ...];
	// URL to link to. May lead to another website, a prefiltered search, a detail page, etc.
	URL: [string, ...];
	// Description of the item. Only present in rare cases when needed.
	Description: [string, ...];
}

interface JurisdictionProfile {
	AssertedBy: [{Link}, ...];
	Description: [string, ...];
	GlobalJurisdiction: [bool, ...];
	JurisdictionException: [{Place}, ...];
	MainJurisdiction: [{Place}, ...];
}

interface ProcessProfile {
	DateEffective: [string, ...];
	Description: [string, ...];
	ExternalInputType: [{Link}, ...];
	Jurisdiction: [{JurisdictionProfile}, ...];
	ProcessFrequency: [string, ...];
	ProcessingAgent: [{Link}, ...];
	ProcessMethod: [{Link}, ...];
	ProcessMethodDescription: [string, ...];
	ProcessStandards: [{Link}, ...];
	ProcessStandardsDescription: [string, ...];
	Region: [{Place}, ...];
	ScoringMethodDescription: [string, ...];
	ScoringMethodExample: [{Link}, ...];
	ScoringMethodExampleDescription: [string, ...];
	SubjectWebpage: [{Link}, ...];
	TargetAssessment: [{Link}, ...];
	TargetCompetencyFramework: [{Link}, ...];
	TargetCredential: [{Link}, ...];
	TargetLearningOpportunity: [{Link}, ...];
	VerificationMethodDescription: [string, ...];
}

interface IdentifierValue {
	IdentifierType: [string, ...];
	IdentifierTypeName: [string, ...];
	IdentifierValueCode: [string, ...];
}

interface Credential {
	// Will always be "Credential"
	BroadType: [string, ...];
	// Will be one of the subclasses of ceterms:Credential
	CTDLType: [string, ...];
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	RecordLanguage: [string, ...];
	AccreditedBy: [{Link}, ...];
	AccreditedIn: [{Place}, ...];
	AdministrationProcess: [{ProcessProfile}, ...];
	AdvancedStandingFrom: [{Link}, ...];
	AlternateName: [string, ...];
	AppealProcess: [{ProcessProfile}, ...];
	ApprovedBy: [{Link}, ...];
	ApprovedIn: [{Place}, ...];
	AssessmentDeliveryType: [{Link}, ...];
	AudienceLevelType: [{Link}, ...];
	AudienceType: [{Link}, ...];
	AvailabilityListing: [{Link}, ...];
	AvailableAt: [{Place}, ...];
	AvailableOnlineAt: [{Link}, ...];
	BroadAlignment: [{Link}, ...];
	CommonConditions: [{ConditionManifest}, ...];
	CommonCosts: [{CostManifest}, ...];
	ComplaintProcess: [{ProcessProfile}, ...];
	CopyrightHolder: [{Link}, ...];
	Corequisite: [{ConditionProfile}, ...];
	CredentialId: [string, ...];
	CredentialStatusType: [{Link}, ...];
	CTID: [string, ...];
	DateEffective: [string, ...];
	DegreeConcentration: [{Link}, ...];
	DegreeMajor: [{Link}, ...];
	DegreeMinor: [{Link}, ...];
	Description: [string, ...];
	DevelopmentProcess: [{ProcessProfile}, ...];
	Earnings: [{EarningsProfile}, ...];
	EmploymentOutcome: [{EmploymentOutcomeProfile}, ...];
	EstimatedCost: [{CostProfile}, ...];
	EstimatedDuration: [{DurationProfile}, ...];
	ExactAlignment: [{Link}, ...];
	ExpirationDate: [string, ...];
	FinancialAssistance: [{FinancialAssistanceProfile}, ...];
	HasPart: [{Link}, ...];
	Holders: [{HoldersProfile}, ...];
	Identifier: [{IdentifierValue}, ...];
	Image: [{Link}, ...];
	IndustryType: [{Link}, ...];
	// BCP-47 language code for the credential being described, rather than the record itself. Do not confuse this with the RecordLanguage metadata property above.
	InLanguage: [string, ...];
	InstructionalProgramType: [{Link}, ...];
	IsAdvancedStandingFor: [{ConditionProfile}, ...];
	ISICV4: [string, ...];
	IsPartOf: [{Link}, ...];
	IsPreparationFor: [{ConditionProfile}, ...];
	IsRecommendedFor: [{ConditionProfile}, ...];
	IsRequiredFor: [{ConditionProfile}, ...];
	Jurisdiction: [{JurisdictionProfile}, ...];
	Keyword: [string, ...];
	LatestVersion: [{Link}, ...];
	LearningDeliveryType: [{Link}, ...];
	MaintenanceProcess: [{ProcessProfile}, ...];
	MajorAlignment: [{Link}, ...];
	MinorAlignment: [{Link}, ...];
	NAICS: [string, ...];
	Name: [string, ...];
	NarrowAlignment: [{Link}, ...];
	NextVersion: [{Link}, ...];
	OccupationType: [{Link}, ...];
	OfferedBy: [{Link}, ...];
	OfferedIn: [{Place}, ...];
	OwnedBy: [{Link}, ...];
	PreparationFrom: [{ConditionProfile}, ...];
	PreviousVersion: [{Link}, ...];
	ProcessStandards: [{Link}, ...];
	ProcessStandardsDescription: [string, ...];
	RecognizedBy: [{Link}, ...];
	RecognizedIn: [{Place}, ...];
	Recommends: [{ConditionProfile}, ...];
	Region: [{Place}, ...];
	RegulatedBy: [{Link}, ...];
	RegulatedIn: [{Place}, ...];
	Renewal: [{ConditionProfile}, ...];
	RenewalFrequency: [{DurationProfile}, ...];
	RenewedBy: [{Link}, ...];
	RenewedIn: [{Place}, ...];
	Requires: [{ConditionProfile}, ...];
	ReviewProcess: [{ProcessProfile}, ...];
	Revocation: [{RevocationProfile}, ...];
	RevocationProcess: [{ProcessProfile}, ...];
	RevokedBy: [{Link}, ...];
	RevokedIn: [{Place}, ...];
	SameAs: [{Link}, ...];
	Subject: [{Link}, ...];
	SubjectWebpage: [{Link}, ...];
	SupersededBy: [{Link}, ...];
	Supersedes: [{Link}, ...];
	TargetPathway: [{Link}, ...];
	VersionIdentifier: [{IdentifierValue}, ...];
}

interface ConditionProfile {
	AlternativeCondition: [{ConditionProfile}, ...];
	AssertedBy: [{Link}, ...];
	AudienceLevelType: [{Link}, ...];
	AudienceType: [{Link}, ...];
	CommonCosts: [{CostProfile}, ...];
	Condition: [string, ...];
	CreditUnitTypeDescription: [string, ...];
	CreditValue: [{ValueProfile}, ...];
	DateEffective: [string, ...];
	Description: [string, ...];
	EstimatedCost: [{CostProfile}, ...];
	Experience: [string, ...];
	Jurisdiction: [{JurisdictionProfile}, ...];
	MinimumAge: [number, ...];
	Name: [string, ...];
	ResidentOf: [{Place}, ...];
	SubjectWebpage: [{Link}, ...];
	SubmissionOf: [{Link}, ...];
	SubmissionOfDescription: [string, ...];
	TargetAssessment: [{Link}, ...];
	TargetCompetency: [{Link}, ...];
	TargetCredential: [{Link}, ...];
	TargetLearningOpportunity: [{Link}, ...];
	Weight: [number, ...];
	YearsOfExperience: [number, ...];
}

interface ValueProfile {
	CreditLevelType: [{Link}, ...];
	CreditUnitType: [{Link}, ...];
	Subject: [{Link}, ...];
	Description: [string, ...];
	MaxValue: [number, ...];
	MinValue: [number, ...];
	Percentage: [number, ...];
	Value: [number, ...];
}

interface CostProfile {
	AudienceType: [{Link}, ...];
	Condition: [string, ...];
	CostDetails: [{Link}, ...];
	Currency: [string, ...];
	Description: [string, ...];
	DirectCostType: [{Link}, ...];
	EndDate: [string, ...];
	Jurisdiction: [{JurisdictionProfile}, ...];
	Name: [string, ...];
	PaymentPattern: [string, ...];
	Price: [number, ...];
	Region: [{Place}, ...];
	ResidencyType: [{Link}, ...];
	StartDate: [string, ...];
}

interface DurationProfile {
	Description: [string, ...];
	ExactDuration: [{Duration}, ...];
	MaximumDuration: [{Duration}, ...];
	MinimumDuration: [{Duration}, ...];
}

interface Duration {
	Years: [number, ...];
	Months: [number, ...];
	Weeks: [number, ...];
	Days: [number, ...];
	Hours: [number, ...];
	Minutes: [number, ...];
	Seconds: [number, ...];
}

interface FinancialAssistanceProfile {
	Description: [string, ...];
	FinancialAssistanceType: [{Link}, ...];
	FinancialAssistanceValue: [{QuantitativeValue}, ...];
	Name: [string, ...];
	SubjectWebpage: [{Link}, ...];
}

interface QuantitativeValue {
	Description: [string, ...];
	MaxValue: [number, ...];
	MinValue: [number, ...];
	Percentage: [number, ...];
	UnitText: [{Link}, ...];
	Value: [number, ...];
}

interface ConditionManifest {
	ConditionManifestOf: [{Link}, ...];
	Corequisite: [{ConditionProfile}, ...];
	CTID: [string, ...];
	Description: [string, ...];
	EntryCondition: [{ConditionProfile}, ...];
	Name: [string, ...];
	Recommends: [{ConditionProfile}, ...];
	Renewal: [{ConditionProfile}, ...];
	Requires: [{ConditionProfile}, ...];
	SubjectWebpage: [{Link}, ...];
}

interface CostManifest {
	CostDetails: [{Link}, ...];
	CostManifestOf: [{Link}, ...];
	CTID: [string, ...];
	Description: [string, ...];
	EndDate: [string, ...];
	EstimatedCost: [{CostProfile}, ...];
	Name: [string, ...];
	StartDate: [string, ...];
}

interface EarningsProfile {
	DateEffective: [string, ...];
	HighEarnings: [number, ...];
	Jurisdiction: [{JurisdictionProfile}, ...];
	LowEarnings: [number, ...];
	MedianEarnings: [number, ...];
	Name: [string, ...];
	PostReceiptMonths: [number, ...];
	Region: [{Place}, ...];
	Source: [{Link}, ...];
	RelevantDataSet: [{Link}, ...];
}

interface EmploymentOutcomeProfile {
	DateEffective: [string, ...];
	Description: [string, ...];
	JobsObtained: [number, ...];
	Jurisdiction: [{JurisdictionProfile}, ...];
	Name: [string, ...];
	Source: [{Link}, ...];
	RelevantDataSet: [{Link}, ...];
}
