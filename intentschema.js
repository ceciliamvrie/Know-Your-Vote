{
  "intents": [
    {
      "intent": "PollResultsIntent"
    },
    {
      "intent": "FindCandidatesIntent"
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
      "intent": "CandidateSupportersIntent",
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
