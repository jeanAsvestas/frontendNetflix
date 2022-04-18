import axios from "axios";
const API_URL = "http://localhost:4000/api/plan/";

const buyPlan = async (user, plan) => {
    return axios.post(API_URL + "buy", {
        user,
        plan,
    });
}

const readPlan = async () => {
    return axios.post(API_URL + "read", {
    });
}

let PlanService = { buyPlan, readPlan };

export default PlanService;