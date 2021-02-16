interface Organization {
	// Will always be "Organization"
	BroadType: string;
	// Will be either "ceterms:CredentialOrganization" or "ceterms:QACredentialOrganization"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	// The record identifer for the organization. Use to format links to the detial page
	Meta_Id: int;
	// Stored as a C# DateTime in our system; converted to just a formatted Date for the record
	Meta_LastUpdated: string;
	// 3-full organization, 2-reference organization
	Meta_StateId: int;
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
	SameAs: AJAXSettings;
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
	Meta_Language: string;
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
	// BCP-47 language code for the Credential being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
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

interface Assessment {
	// Will always be "Assessment"
	BroadType: string;
	// Will be "ceterms:AssessmentProfile"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	AccreditedBy: AJAXSettings;
	AccreditedIn: Array<Place>;
	AdministrationProcess: Array<ProcessProfile>;
	AdvancedStandingFrom: Array<ConditionProfile>;
	ApprovedBy: AJAXSettings;
	ApprovedIn: Array<Place>;
	Assesses: AJAXSettings;
	AssessmentExample: Link;
	AssessmentExampleDescription: string;
	AssessmentMethodDescription: string;
	AssessmentMethodType: Array<Link>;
	AssessmentOutput: string;
	AssessmentUseType: Array<Link>;
	AudienceLevelType: Array<Link>;
	AudienceType: Array<Link>;
	AvailabilityListing: Array<Link>;
	AvailableAt: Array<Place>;
	AvailableOnlineAt: Link;
	CommonConditions: AJAXSettings;
	CommonCosts: AJAXSettings;
	Corequisite: Array<ConditionProfile>;
	CreditUnitTypeDescription: string;
	CreditValue: Array<ValueProfile>;
	CTID: string;
	DateEffective: string;
	DeliveryType: Array<Link>;
	DeliveryTypeDescription: string;
	Description: string;
	DevelopmentProcess: Array<ProcessProfile>;
	EntryCondition: Array<ConditionProfile>;
	EstimatedCost: Array<CostProfile>;
	EstimatedDuration: Array<DurationProfile>;
	ExpirationDate: string;
	ExternalResearch: Array<Link>;
	FinancialAssistance: Array<FinancialAssistanceProfile>;
	HasGroupEvaluation: boolean;
	HasGroupParticipation: boolean;
	Identifier: Array<IdentifierValue>;
	IndustryType: Array<Link>;
	// BCP-47 language code for the Assessment being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
	InLanguage: Array<string>;
	InstructionalProgramType: Array<Link>;
	IsAdvancedStandingFor: Array<ConditionProfile>;
	IsPreparationFor: Array<ConditionProfile>;
	IsProctored: boolean;
	IsRecommendedFor: ConditionProfile;
	IsRequiredFor: Array<ConditionProfile>;
	Jurisdiction: Array<JurisdictionProfile>;
	Keyword: Array<string>;
	LearningMethodDescription: string;
	MaintenanceProcess: Array<ProcessProfile>;
	Name: string;
	OccupationType: Array<Link>;
	OfferedBy: AJAXSettings;
	OfferedIn: Array<Place>;
	OwnedBy: AJAXSettings;
	PreparationFrom: Array<ConditionProfile>;
	ProcessStandards: Link;
	ProcessStandardsDescription: string;
	RecognizedBy: AJAXSettings;
	RecognizedIn: Array<Place>;
	Recommends: Array<ConditionProfile>;
	RegulatedBy: AJAXSettings;
	RegulatedIn: Array<Place>;
	Requires: Array<ConditionProfile>;
	SameAs: AJAXSettings;
	ScoringMethodDescription: string;
	ScoringMethodExample: Link;
	ScoringMethodExampleDescription: string;
	ScoringMethodType: Array<Link>;
	Subject: Array<Link>;
	SubjectWebpage: Link;
	TargetLearningResource: Array<Link>;
	TargetPathway: AJAXSettings;
	VersionIdentifier: Array<IdentifierValue>;
}

interface LearningOpportunity {
	// Will always be "LearningOpportunity"
	BroadType: string;
	// Will be "ceterms:LearningOpportunityProfile"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	AccreditedBy: AJAXSettings;
	AccreditedIn: Array<Place>;
	AdvancedStandingFrom: Array<ConditionProfile>;
	ApprovedBy: AJAXSettings;
	ApprovedIn: Array<Place>;
	AssessmentMethodDescription: string;
	AssessmentMethodType: Array<Link>;
	AudienceLevelType: Array<Link>;
	AudienceType: Array<Link>;
	AvailabilityListing: Array<Link>;
	AvailableAt: Array<Place>;
	AvailableOnlineAt: Link;
	CommonConditions: AJAXSettings;
	CommonCosts: AJAXSettings;
	Corequisite: Array<ConditionProfile>;
	CreditUnitTypeDescription: string;
	CreditValue: Array<ValueProfile>;
	CTID: string;
	DateEffective: string;
	DeliveryType: Array<Link>;
	DeliveryTypeDescription: string;
	Description: string;
	EntryCondition: Array<ConditionProfile>;
	EstimatedCost: Array<CostProfile>;
	EstimatedDuration: Array<DurationProfile>;
	ExpirationDate: string;
	FinancialAssistance: Array<FinancialAssistanceProfile>;
	HasPart: AJAXSettings;
	Identifier: Array<IdentifierValue>;
	IndustryType: Array<Link>;
	// BCP-47 language code for the Learning Opportunity being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
	InLanguage: Array<string>;
	InstructionalProgramType: Array<Link>;
	IsAdvancedStandingFor: Array<ConditionProfile>;
	IsPartOf: AJAXSettings;
	IsPreparationFor: Array<ConditionProfile>;
	IsRecommendedFor: Array<ConditionProfile>;
	IsRequiredFor: Array<ConditionProfile>;
	Jurisdiction: Array<JurisdictionProfile>;
	Keyword: Array<string>;
	LearningMethodDescription: string;
	LearningMethodType: Array<Link>;
	Name: string;
	OccupationType: Array<Link>;
	OfferedBy: AJAXSettings;
	OfferedIn: Array<Place>;
	OwnedBy: AJAXSettings;
	PreparationFrom: Array<ConditionProfile>;
	RecognizedBy: AJAXSettings;
	RecognizedIn: Array<Place>;
	Recommends: Array<ConditionProfile>;
	RegulatedBy: AJAXSettings;
	RegulatedIn: Array<Place>;
	Requires: Array<ConditionProfile>;
	SameAs: AJAXSettings;
	Subject: Array<Link>;
	SubjectWebpage: Link;
	TargetAssessment: AJAXSettings;
	TargetLearningOpportunity: AJAXSettings;
	TargetLearningResource: Array<Link>;
	TargetPathway: AJAXSettings;
	Teaches: AJAXSettings;
	VersionIdentifier: Array<IdentifierValue>;
}

interface TransferValueProfile {
	// Will always be "TransferValueProfile"
	BroadType: string;
	// Will be "ceterms:TransferValueProfile"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	DerivedFrom: AJAXSettings;
	CTID: Array<string>;
	Description: Array<string>;
	EndDate: string;
	Identifier: Array<IdentifierValue>;
	Name: string;
	OwnedBy: AJAXSettings;
	StartDate: string;
	SubjectWebpage: Link;
	TransferValue: Array<ValueProfile>;
	TransferValueFor: AJAXSettings;
	TransferValueFrom: AJAXSettings;
}

interface PathwaySet {
	// Will always be "PathwaySet"
	BroadType: string;
	// Will be "ceterms:PathwaySet"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	CTID: string;
	Description: string;
	HasPathway: AJAXSettings;
	Name: string;
	OfferedBy: AJAXSettings;
	OwnedBy: AJAXSettings;
	SubjectWebpage: Link;
}

interface Pathway {
	// Will always be "Pathway"
	BroadType: string;
	// Will be "ceterms:Pathway"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	HasProgressionModel: AJAXSettings;
	// Meta property used to reference all of the components for this Pathway.
	Meta_HasPart: AJAXSettings;
	HasChild: AJAXSettings;
	CTID: string;
	Description: string;
	HasDestinationComponent: AJAXSettings;
	IndustryType: Array<Link>;
	Keyword: Array<string>;
	Name: string;
	OccupationType: Array<Link>;
	OfferedBy: AJAXSettings;
	OwnedBy: AJAXSettings;
	Subject: Array<Link>;
	SubjectWebpage: Link;
}

interface CompetencyFramework {
	// Will always be "CompetencyFramework"
	BroadType: string;
	// Will be "ceasn:CompetencyFramework"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	HasProgressionModel: AJAXSettings;
	AlignFrom: AJAXSettings;
	AlignTo: AJAXSettings;
	Author: Array<string>;
	ConceptKeyword: Array<string>;
	ConceptTerm: Array<Link>;
	Creator: AJAXSettings;
	DateCopyrighted: string;
	DateCreated: string;
	DateModified: string;
	DateValidFrom: string;
	DateValidUntil: string;
	DerivedFrom: AJAXSettings;
	Description: string;
	EducationLevelType: Array<Link>;
	// Meta property used to reference all of the competencies for this Framework.
	Meta_HasPart: AJAXSettings;
	HasTopChild: AJAXSettings;
	Identifier: Array<IdentifierValue>;
	// BCP-47 language code for the Framework being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
	InLanguage: Array<string>;
	License: Array<Link>;
	LocalSubject: Array<string>;
	Name: string;
	PublicationStatusType: Link;
	Publisher: AJAXSettings;
	PublisherName: Array<string>;
	RepositoryDate: string;
	Rights: string;
	RightsHolder: AJAXSettings;
	Source: Array<Link>;
	CTID: string;
	IndustryType: Array<Link>;
	OccupationType: Array<Link>;
}

interface ConceptScheme {
	// Will always be "ConceptScheme"
	BroadType: string;
	// Will be either "skos:ConceptScheme" or "asn:ProgressionModel"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	ConceptKeyword: Array<string>;
	ConceptTerm: Array<Link>;
	Creator: AJAXSettings;
	DateCopyrighted: string;
	DateCreated: string;
	DateModified: string;
	Description: string;
	// BCP-47 language code for the Scheme being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
	InLanguage: Array<string>;
	License: Array<Link>;
	Name: string;
	PublicationStatusType: Link;
	Publisher: AJAXSettings;
	PublisherName: Array<string>;
	Rights: string;
	RightsHolder: AJAXSettings;
	Source: Array<Link>;
	CTID: string;
	// Meta property used to reference all of the concepts for this Scheme.
	Meta_HasPart: AJAXSettings;
	HasTopConcept: AJAXSettings;
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
	SubjectWebpage: Link;
	TargetCredential: AJAXSettings;
	VerificationDirectory: Link;
	VerificationMethodDescription: string;
	VerificationService: AJAXSettings;
	VerifiedClaimType: AJAXSettings;
}
