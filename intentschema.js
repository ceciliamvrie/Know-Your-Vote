{
  "intents": [
    {
      "intent": "CandidateVotesIntent",
	 "slots": [
        {
          "name": "Candidate",
          "type": "LIST_OF_CANDIDATES"
        }
      ]
    },
    {
      "intent": "CandidateBioIntent",
	"slots": [
        {
          "name": "Candidate",
          "type": "LIST_OF_CANDIDATES"
        }
      ]
    },
    {
      "intent": "PoliticalPartiesIntent",
      "slots": [
        {
          "name": "Party",
          "type": "LIST_OF_PARTIES"
        }
      ]
    },
    {
      "intent": "CandidateRatingIntent",
      "slots": [
        {
          "name": "Candidate",
          "type": "LIST_OF_CANDIDATES"
        }
      ]
    },
    {
      "intent": "AMAZON.RepeatIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    },
    {
      "intent":"AMAZON.PauseIntent"
    },
    {
      "intent":"AMAZON.ResumeIntent"
	}
  ]
}
