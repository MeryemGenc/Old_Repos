import { delay } from "../common/util/util";
import { fakeData } from "./fakeData";


export function fetchSampleData() {
    return delay(1000).then(
        function() {
            return Promise.resolve(fakeData)
        }
    )
}



