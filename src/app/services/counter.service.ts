import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CounterService {

    private _displayCount: number;
    private _timerStartCount: number = 0;
    private _timerStopCount: number = 0;
    private _timerDateData: string[] = [];
    private _startPauseData = new BehaviorSubject([]);


    sendStartPauseData(data) {
        this._startPauseData.next([data]);
    }

    getStartPauseData() {
        return this._startPauseData.asObservable();
    }


    public get displayCount() {
        return this._displayCount;
    }

    public set displayCount(count: number) {
        this._displayCount = count;
    }

    public get timerStartCount() {
        return this._timerStartCount;
    }

    public set timerStartCount(count: number) {
        this._timerStartCount = count;
    }

    public get timerStopCount() {
        return this._timerStopCount;
    }

    public set timerStopCount(count: number) {
        this._timerStopCount = count;
    }

    public get timerDateData(): string[] {
        return this._timerDateData;
    }

    public set timerDateData(data: string[]) {
        this._timerDateData = data;
    }


}