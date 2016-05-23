export class MockAoServiceData {
    createDb() {
        let aos = [
            {
                "id": 1,
                "titre": "Massification",
                "client": "BNP Paribas",
                "dateReception": "2016-01-01",
                "dateReponse": "2016-12-31"
            },
            {
                "id": 2,
                "titre": "Avec vous de A à Z",
                "client": "Allianz",
                "dateReception": "2016-01-01",
                "dateReponse": "2016-03-31"
            },
            {
                "id": 3,
                "titre": "AO LCL 1",
                "client": "LCL",
                "dateReception": "2016-06-01",
                "dateReponse": "2016-12-31"
            },
            {
                "id": 4,
                "titre": "AO LCL2",
                "client": "LCL",
                "dateReception": "2016-06-01",
                "dateReponse": "2016-12-31"
            }
        ];
        return {aos};
    }
}