export default function timeHelper(time: number):string {
    const timeStr = time.toString().padStart(2, "0")
    return timeStr
}