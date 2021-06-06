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
	AccreditedBy: AJAXSettings;	// Organization
	AccreditedIn: Array<JurisdictionProfile>;
	// QualityAssurancePerformed
	Accredits: AJAXSettings;	// Organization, Credential, Assessment, Learning Opportunity
	Address: Array<Place>;
	AdministrationProcess: Array<ProcessProfile>;
	AgentPurpose: Link;
	AgentPurposeDescription: string;
	AgentSectorType: Link;
	AgentType: Array<Link>;
	AlternateName: Array<string>;
	AppealProcess: Array<ProcessProfile>;
	// QAReceived (combined)
	ApprovedBy: AJAXSettings;	// Organization
	ApprovedIn: Array<JurisdictionProfile>;
	// QualityAssurancePerformed
	Approves: AJAXSettings;	// Organization, Credential, Assessment, Learning Opportunity
	AvailabilityListing: Array<Link>;
	ComplaintProcess: Array<ProcessProfile>;
	CTID: string;
	Department: AJAXSettings;	// Organization
	Description: string;
	DevelopmentProcess: Array<ProcessProfile>;
	DUNS: string;
	Email: Array<string>;
	FEIN: string;
	FoundingDate: string;
	HasConditionManifest: AJAXSettings;	// ConditionManifest
	HasCostManifest: AJAXSettings;	// CostManifest
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
	Offers: AJAXSettings;	// Credential, Assessment, Learning Opportunity
	OPEID: string;
	Owns: AJAXSettings;	// Credential, Assessment, Learning Opportunity
	ParentOrganization: AJAXSettings;	// Organization
	QualityAssuranceTargetType: Array<Link>;
	// QAReceived (combined)
	RecognizedBy: AJAXSettings;	// Organization
	RecognizedIn: Array<JurisdictionProfile>;
	// QualityAssurancePerformed
	Recognizes: AJAXSettings;	// Organization, Credential, Assessment, Learning Opportunity
	// QAReceived (combined)
	RegulatedBy: AJAXSettings;	// Organization
	RegulatedIn: Array<JurisdictionProfile>;
	// QualityAssurancePerformed
	Regulates: AJAXSettings;	// Organization
	// Same as Owns/Offers link
	Renews: AJAXSettings;	// Credential
	ReviewProcess: Array<ProcessProfile>;
	RevocationProcess: Array<ProcessProfile>;
	// Same as Owns/Offers link
	Revokes: AJAXSettings;	// Credential
	SameAs: AJAXSettings;	// Organization
	ServiceType: Array<Link>;
	SocialMedia: Array<Link>;
	SubjectWebpage: Link;
	SubOrganization: AJAXSettings;	// Organization
	TransferValueStatement: Link;
	TransferValueStatementDescription: string;
}

interface Credential {
	// Will always be "Credential"
	BroadType: string;
	// Will be the Shorthand URI for one of the subclasses of ceterms:Credential (See "Credential and Subclasses": https://credreg.net/ctdl/terms#groups ). Note: group badge types
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	// Quality Assurance
	AccreditedBy: AJAXSettings;	// Organization
	AccreditedIn: Array<JurisdictionProfile>;
	AdministrationProcess: Array<ProcessProfile>;
	AdvancedStandingFrom: Array<ConditionProfile>;
	AlternateName: Array<string>;
	AppealProcess: Array<ProcessProfile>;
	ApprovedBy: AJAXSettings;	// Organization
	ApprovedIn: Array<JurisdictionProfile>;
	AssessmentDeliveryType: Array<Link>;
	AudienceLevelType: Array<Link>;
	AudienceType: Array<Link>;
	AvailabilityListing: Array<Link>;
	AvailableAt: Array<Place>;
	AvailableOnlineAt: Link;
	CommonConditions: AJAXSettings;	// ConditionManifest
	CommonCosts: AJAXSettings;	// CostManifest
	Meta_Connections: Array<ConnectionSummary>;
	ComplaintProcess: Array<ProcessProfile>;
	CopyrightHolder: AJAXSettings;	// Organization
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
	ExpirationDate: string;
	FinancialAssistance: Array<FinancialAssistanceProfile>;
	HasPart: AJAXSettings;	// Credential
	Holders: Array<HoldersProfile>;
	Identifier: Array<IdentifierValue>;
	Image: Link;
	IndustryType: Array<Link>;
	// BCP-47 language code for the Credential being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
	InLanguage: Array<string>;
	InstructionalProgramType: Array<Link>;
	IsAdvancedStandingFor: Array<ConditionProfile>;
	ISICV4: string;
	IsPartOf: AJAXSettings;	// Credential
	IsPreparationFor: Array<ConditionProfile>;
	IsRecommendedFor: Array<ConditionProfile>;
	IsRequiredFor: Array<ConditionProfile>;
	Jurisdiction: Array<JurisdictionProfile>;
	Keyword: Array<string>;
	LatestVersion: AJAXSettings;	// Credential
	LearningDeliveryType: Array<Link>;
	MaintenanceProcess: Array<ProcessProfile>;
	NAICS: string;
	Name: string;
	NextVersion: AJAXSettings;	// Credential
	OccupationType: Array<Link>;
	OfferedBy: AJAXSettings;	// Organization
	OfferedIn: Array<JurisdictionProfile>;
	OwnedBy: AJAXSettings;	// Organization
	PreparationFrom: Array<ConditionProfile>;
	PreviousVersion: AJAXSettings;	// Credential
	ProcessStandards: Link;
	ProcessStandardsDescription: string;
	RecognizedBy: AJAXSettings;	// Organization
	RecognizedIn: Array<JurisdictionProfile>;
	Recommends: Array<ConditionProfile>;
	RegulatedBy: AJAXSettings;	// Organization
	RegulatedIn: Array<JurisdictionProfile>;
	Renewal: Array<ConditionProfile>;
	RenewalFrequency: Array<DurationProfile>;
	RenewedBy: AJAXSettings;	// Organization
	RenewedIn: Array<JurisdictionProfile>;
	Requires: Array<ConditionProfile>;
	ReviewProcess: Array<ProcessProfile>;
	Revocation: Array<RevocationProfile>;
	RevocationProcess: Array<ProcessProfile>;
	RevokedBy: AJAXSettings;	// Organization
	RevokedIn: Array<JurisdictionProfile>;
	SameAs: AJAXSettings;	// Credential
	Subject: Array<Link>;
	SubjectWebpage: Link;
	SupersededBy: AJAXSettings;	// Credential
	Supersedes: AJAXSettings;	// Credential
	TargetPathway: AJAXSettings;	// Pathway
	VersionIdentifier: Array<IdentifierValue>;
}

interface Assessment {
	// Will always be "Assessment"
	BroadType: string;
	// Will be "ceterms:AssessmentProfile"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	AccreditedBy: AJAXSettings;	// Organization
	AccreditedIn: Array<JurisdictionProfile>;
	AdministrationProcess: Array<ProcessProfile>;
	AdvancedStandingFrom: Array<ConditionProfile>;
	ApprovedBy: AJAXSettings;	// Organization
	ApprovedIn: Array<JurisdictionProfile>;
	Assesses: AJAXSettings;	// Competency
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
	CommonConditions: AJAXSettings;	// ConditionManifest
	CommonCosts: AJAXSettings;	// CostManifest
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
	OfferedBy: AJAXSettings;	// Organization
	OfferedIn: Array<JurisdictionProfile>;
	OwnedBy: AJAXSettings;	// Organization
	PreparationFrom: Array<ConditionProfile>;
	ProcessStandards: Link;
	ProcessStandardsDescription: string;
	RecognizedBy: AJAXSettings;	// Organization
	RecognizedIn: Array<JurisdictionProfile>;
	Recommends: Array<ConditionProfile>;
	RegulatedBy: AJAXSettings;	// Organization
	RegulatedIn: Array<JurisdictionProfile>;
	Requires: Array<ConditionProfile>;
	SameAs: AJAXSettings;	// Assessment
	ScoringMethodDescription: string;
	ScoringMethodExample: Link;
	ScoringMethodExampleDescription: string;
	ScoringMethodType: Array<Link>;
	Subject: Array<Link>;
	SubjectWebpage: Link;
	TargetLearningResource: Array<Link>;
	TargetPathway: AJAXSettings;	// Pathway
	VersionIdentifier: Array<IdentifierValue>;
}

interface LearningOpportunity {
	// Will always be "LearningOpportunity"
	BroadType: string;
	// Will be "ceterms:LearningOpportunityProfile"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	AccreditedBy: AJAXSettings;	// Organization
	AccreditedIn: Array<JurisdictionProfile>;
	AdvancedStandingFrom: Array<ConditionProfile>;
	ApprovedBy: AJAXSettings;	// Organization
	ApprovedIn: Array<JurisdictionProfile>;
	AssessmentMethodDescription: string;
	AssessmentMethodType: Array<Link>;
	AudienceLevelType: Array<Link>;
	AudienceType: Array<Link>;
	AvailabilityListing: Array<Link>;
	AvailableAt: Array<Place>;
	AvailableOnlineAt: Link;
	CommonConditions: AJAXSettings;	// ConditionManifest
	CommonCosts: AJAXSettings;	// CostManifest
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
	HasPart: AJAXSettings;	// LearningOpportunity
	Identifier: Array<IdentifierValue>;
	IndustryType: Array<Link>;
	// BCP-47 language code for the Learning Opportunity being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
	InLanguage: Array<string>;
	InstructionalProgramType: Array<Link>;
	IsAdvancedStandingFor: Array<ConditionProfile>;
	IsPartOf: AJAXSettings;	// LearningOpportunity
	IsPreparationFor: Array<ConditionProfile>;
	IsRecommendedFor: Array<ConditionProfile>;
	IsRequiredFor: Array<ConditionProfile>;
	Jurisdiction: Array<JurisdictionProfile>;
	Keyword: Array<string>;
	LearningMethodDescription: string;
	LearningMethodType: Array<Link>;
	Name: string;
	OccupationType: Array<Link>;
	OfferedBy: AJAXSettings;	// Organization
	OfferedIn: Array<JurisdictionProfile>;
	OwnedBy: AJAXSettings;	// Organization
	PreparationFrom: Array<ConditionProfile>;
	RecognizedBy: AJAXSettings;	// Organization
	RecognizedIn: Array<JurisdictionProfile>;
	Recommends: Array<ConditionProfile>;
	RegulatedBy: AJAXSettings;	// Organization
	RegulatedIn: Array<JurisdictionProfile>;
	Requires: Array<ConditionProfile>;
	SameAs: AJAXSettings;	// LearningOpportunity
	Subject: Array<Link>;
	SubjectWebpage: Link;
	TargetAssessment: AJAXSettings;	// Assessment
	TargetLearningOpportunity: AJAXSettings;	// LearningOpportunity
	TargetLearningResource: Array<Link>;
	TargetPathway: AJAXSettings;	// Pathway
	Teaches: AJAXSettings;	// Competency
	VersionIdentifier: Array<IdentifierValue>;
}

interface TransferValueProfile {
	// Will always be "TransferValueProfile"
	BroadType: string;
	// Will be "ceterms:TransferValueProfile"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	DerivedFrom: AJAXSettings;	// TransferValueProfile
	CTID: Array<string>;
	Description: Array<string>;
	EndDate: string;
	Identifier: Array<IdentifierValue>;
	Name: string;
	OwnedBy: AJAXSettings;	// Organization
	StartDate: string;
	SubjectWebpage: Link;
	TransferValue: Array<ValueProfile>;
	TransferValueFor: AJAXSettings;	// Credential, Assessment, Learning Opportunity, Competency
	TransferValueFrom: AJAXSettings;	// Credential, Assessment, Learning Opportunity, Competency
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
	HasPathway: AJAXSettings;	// Pathway
	Name: string;
	OfferedBy: AJAXSettings;	// Organization
	OwnedBy: AJAXSettings;	// Organization
	SubjectWebpage: Link;
}

interface Pathway {
	// Will always be "Pathway"
	BroadType: string;
	// Will be "ceterms:Pathway"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	HasProgressionModel: AJAXSettings;	// ConceptScheme
	// Meta property used to reference all of the components for this Pathway.
	Meta_HasPart: AJAXSettings;	// PathwayComponent
	HasChild: AJAXSettings;	// PathwayComponent
	CTID: string;
	Description: string;
	HasDestinationComponent: AJAXSettings;	// PathwayComponent
	IndustryType: Array<Link>;
	Keyword: Array<string>;
	Name: string;
	OccupationType: Array<Link>;
	OfferedBy: AJAXSettings;	// Organization
	OwnedBy: AJAXSettings;	// Organization
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
	HasProgressionModel: AJAXSettings;	// ConceptScheme
	AlignFrom: AJAXSettings;	// CompetencyFramework
	AlignTo: AJAXSettings;	// CompetencyFramework
	Author: Array<string>;
	ConceptKeyword: Array<string>;
	ConceptTerm: Array<Link>;
	Creator: AJAXSettings;	// Organization
	DateCopyrighted: string;
	DateCreated: string;
	DateModified: string;
	DateValidFrom: string;
	DateValidUntil: string;
	DerivedFrom: AJAXSettings;	// CompetencyFramework
	Description: string;
	EducationLevelType: Array<Link>;
	// Meta property used to reference all of the competencies for this Framework.
	Meta_HasPart: AJAXSettings;	// Competency
	HasTopChild: AJAXSettings;	// Competency
	Identifier: Array<IdentifierValue>;
	// BCP-47 language code for the Framework being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
	InLanguage: Array<string>;
	License: Array<Link>;
	LocalSubject: Array<string>;
	Name: string;
	PublicationStatusType: Link;
	Publisher: AJAXSettings;	// Organization
	PublisherName: Array<string>;
	RepositoryDate: string;
	Rights: string;
	RightsHolder: AJAXSettings;	// Organization
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
	Creator: AJAXSettings;	// Organization
	DateCopyrighted: string;
	DateCreated: string;
	DateModified: string;
	Description: string;
	// BCP-47 language code for the Scheme being described, rather than the record itself. Do not confuse this with the Meta_Language metadata property above.
	InLanguage: Array<string>;
	License: Array<Link>;
	Name: string;
	PublicationStatusType: Link;
	Publisher: AJAXSettings;	// Organization
	PublisherName: Array<string>;
	Rights: string;
	RightsHolder: AJAXSettings;	// Organization
	Source: Array<Link>;
	CTID: string;
	// Meta property used to reference all of the concepts for this Scheme.
	Meta_HasPart: AJAXSettings;	// Concept
	HasTopConcept: AJAXSettings;	// Concept
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
	AssertedBy: AJAXSettings;	// Organization
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
	ProcessingAgent: AJAXSettings;	// Organization
	ProcessMethod: Link;
	ProcessMethodDescription: string;
	ProcessStandards: Link;
	ProcessStandardsDescription: string;
	ScoringMethodDescription: string;
	ScoringMethodExample: Link;
	ScoringMethodExampleDescription: string;
	SubjectWebpage: Link;
	TargetAssessment: AJAXSettings;	// Assessment
	TargetCompetencyFramework: AJAXSettings;	// CompetencyFramework
	TargetCredential: AJAXSettings;	// Credential
	TargetLearningOpportunity: AJAXSettings;	// LearningOpportunity
	VerificationMethodDescription: string;
}

interface IdentifierValue {
	IdentifierType: string;
	IdentifierTypeName: string;
	IdentifierValueCode: string;
}

interface ConditionProfile {
	AlternativeCondition: Array<ConditionProfile>;
	AssertedBy: AJAXSettings;	// Organization
	AudienceLevelType: Array<Link>;
	AudienceType: Array<Link>;
	CommonCosts: AJAXSettings;	// CostManifest
	Condition: Array<string>;
	CreditUnitTypeDescription: string;
	CreditValue: Array<ValueProfile>;
	DateEffective: string;
	Description: string;
	EstimatedCost: Array<CostProfile>;
	Experience: string;
	Jurisdiction: Array<JurisdictionProfile>;
	// ignore if zero
	MinimumAge: number;
	Name: string;
	ResidentOf: Array<Place>;
	SubjectWebpage: Link;
	SubmissionOf: Link;
	SubmissionOfDescription: string;
	TargetAssessment: AJAXSettings;	// Assessment
	TargetCompetency: AJAXSettings;	// Competency
	TargetCredential: AJAXSettings;	// Credential
	TargetLearningOpportunity: AJAXSettings;	// LearningOpportunity
	// ignore if zero
	Weight: number;
	// ignore if zero
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
	RelevantDataSet: AJAXSettings;	// DataSetProfile
}

interface EmploymentOutcomeProfile {
	DateEffective: string;
	Description: string;
	JobsObtained: number;
	Jurisdiction: Array<JurisdictionProfile>;
	Name: string;
	Source: Link;
	RelevantDataSet: AJAXSettings;	// DataSetProfile
}

interface HoldersProfile {
	DateEffective: string;
	DemographicInformation: string;
	Description: string;
	Jurisdiction: Array<JurisdictionProfile>;
	Name: string;
	NumberAwarded: number;
	Source: Link;
	RelevantDataSet: AJAXSettings;	// DataSetProfile
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
	EstimatedCost: Array<CostProfile>;
	HolderMustAuthorize: boolean;
	Jurisdiction: Array<JurisdictionProfile>;
	OfferedBy: AJAXSettings;	// Organization
	OfferedIn: Array<JurisdictionProfile>;
	SubjectWebpage: Link;
	TargetCredential: AJAXSettings;	// Credential
	VerificationDirectory: Link;
	VerificationMethodDescription: string;
	VerificationService: Link;
	VerifiedClaimType: Link;
}

interface Place {
	AddressCountry: string;
	AddressLocality: string;
	AddressRegion: string;
	Description: string;
	GeoURI: Link;
	Latitude: number;
	Longitude: number;
	Name: string;
	PostalCode: string;
	PostOfficeBoxNumber: string;
	StreetAddress: string;
	TargetContactPoint: Array<ContactPoint>;
}

interface ContactPoint {
	ContactType: string;
	Email: string;
	FaxNumber: string;
	Name: string;
	SocialMedia: Array<Link>;
	Telephone: string;
}

interface PathwayComponent {
	// Will always be "PathwayComponent". Note that PathwayComponents are bundled with their parent Pathway and thus will usually all be presented together in a given data set, eliminating the need for many actual AJAX calls
	BroadType: string;
	// Will be one of the subclasses of ceterms:PathwayComponent (See: "Pathway Component and Subclasses" https://credreg.net/ctdl/terms#groups )
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	HasProgressionLevel: AJAXSettings;	// ConceptScheme
	// List of URIs to other PathwayComponents
	HasChild: Array<string>;
	// List of URIs to other PathwayComponents
	IsChildOf: Array<string>;
	ComponentDesignation: Array<Link>;
	CTID: string;
	Description: string;
	HasCondition: ComponentCondition;
	Identifier: IdentifierValue;
	// List of URIs to Pathways. Almost always only one URI.
	IsDestinationComponentOf: Array<string>;
	// List of URIs to Pathways. Almost always only one URI.
	IsPartOf: Array<string>;
	Name: string;
	PointValue: Array<QuantitativeValue>;
	// List of URIs to other PathwayComponents
	Precedes: Array<string>;
	// List of URIs to other PathwayComponents
	Prerequisite: Array<string>;
	ProgramTerm: Array<Link>;
	SourceData: Link;
	SubjectWebpage: Link;
	// Only relevant for ceterms:CredentialComponent
	CredentialType: Link;
	// Only relevant for ceterms:CourseComponent
	CreditValue: Array<ValueProfile>;
	// Only relevant for ceterms:JobComponent
	IndustryType: Array<Link>;
	// Only relevant for ceterms:JobComponent
	OccupationType: Array<Link>;
}

interface Competency {
	// Will always be "Competency". Note that Competencies are bundled with their parent CompetencyFramework and thus will usually all be presented together in a given data set, eliminating the need for many actual AJAX calls
	BroadType: string;
	// Will be "ceasn:Competency"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	CTID: string;
	HasProgressionLevel: AJAXSettings;	// Concept
	AbilityEmbodied: AJAXSettings;	// Competency
	AlignFrom: AJAXSettings;	// Competency
	AlignTo: AJAXSettings;	// Competency
	AltCodedNotation: Array<string>;
	BroadAlignment: AJAXSettings;	// Competency
	CodedNotation: string;
	Comment: string;
	CompetencyCategory: string;
	CompetencyLabel: string;
	CompetencyText: string;
	ConceptKeyword: string;
	ConceptTerm: Array<Link>;
	EducationLevelType: Array<Link>;
	ExactAlignment: AJAXSettings;	// Competency
	// List of URIs to other Competencies
	HasChild: Array<string>;
	Identifier: Array<IdentifierValue>;
	// List of URIs to other Competencies. Almost always only one URI.
	IsChildOf: Array<string>;
	// List of URIs to CompetencyFrameworks. Almost always only one URI.
	IsPartOf: Array<string>;
	// List of URIs to CompetencyFrameworks. Almost always only one URI.
	IsTopChildOf: Array<string>;
	KnowledgeEmbodied: AJAXSettings;	// Competency
	ListID: string;
	LocalSubject: Array<string>;
	MajorAlignment: AJAXSettings;	// Competency
	MinorAlignment: AJAXSettings;	// Competency
	NarrowAlignment: AJAXSettings;	// Competency
	PrerequisiteAlignment: AJAXSettings;	// Competency
	ShouldIndex: boolean;
	SkillEmbodied: AJAXSettings;	// Competency
	TaskEmbodied: Array<Link>;
	Weight: Number;
}

interface Concept {
	// Will always be "Concept". Note that Concepts are bundled with their parent ConceptScheme and thus will usually all be presented together in a given data set, eliminating the need for many actual AJAX calls
	BroadType: string;
	// Will be "skos:Concept" or "asn:ProgressionLevel"
	CTDLType: string;
	// Will always be a BCP-47 language code, forced to all lowercase. Usually "en". This will indicate the language used by all of the relevant string values for this record.
	Meta_Language: string;
	CTID: string;
	AltLabel: string;
	// List of URIs to other Concepts
	Broader: Array<string>;
	BroadMatch: AJAXSettings;	// Concept
	ChangeNote: string;
	CloseMatch: AJAXSettings;	// Concept
	Definition: string;
	ExactMatch: AJAXSettings;	// Concept
	HiddenLabel: string;
	// List of URIs to ConceptSchemes. Almost always only one URI.
	InScheme: Array<string>;
	// List of URIs to other Concepts
	Narrower: Array<string>;
	NarrowMatch: AJAXSettings;	// Concept
	Notation: string;
	Note: string;
	PrefLabel: string;
	Related: AJAXSettings;	// Concept
	// List of URIs to ConceptSchemes. Almost always only one URI.
	TopConceptOf: Array<string>;
}

interface ConnectionSummary {
	// Bubbled-Up Requirements
	Requires: ConnectionTargetSet;
	// Bubbled-Up Recommendations
	Recommends: ConnectionTargetSet;
	// Bubbled-Up Advanced Standing connections
	AdvancedStandingFrom: ConnectionTargetSet;
	// Bubbled-Up Preparation connections
	PreparationFrom: ConnectionTargetSet;
	// Bubbled-Up Inverse Requirements
	IsRequiredFor: ConnectionTargetSet;
	// Bubbled-Up Inverse Recommendations
	IsRecommendedFor: ConnectionTargetSet;
	// Bubbled-Up Inverse Advanced Standing connections
	IsAdvancedStandingFor: ConnectionTargetSet;
	// Bubbled-Up Inverse Preparation connections
	IsPreparationFor: ConnectionTargetSet;
}

interface ConnectionTargetSet {
	// Bubbled-Up connections to Credentials
	TargetCredential: AJAXSettings;	// Credential
	// Bubbled-Up connections to Assessments
	TargetAssessment: AJAXSettings;	// Assessment
	// Bubbled-Up connections to LearningOpportunities
	TargetLearningOpportunity: AJAXSettings;	// LearningOpportunity
	// Bubbled-Up connections to Competencies
	TargetCompetency: AJAXSettings;	// Competency
}
