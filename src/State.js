import { makeAutoObservable } from "mobx"


class VmixState {
    Output = ''
    Output2 = 'far_top_1'
    Output3 = 'far_top_2'
    Output4 = 'far_top_3'
    Streaming = false
    Connected = false

    constructor() {
        makeAutoObservable(this)
    }
}


export const CAMERA_END = {
    FAR: 'FAR',
    NEAR: 'NEAR',
    UNKNOWN: 'UNKNOWN'
}

export const CAMERA_VIEW = {
    SPLIT: 'SPLIT',
    TOPDOWN: 'TOP-DOWN',
    UNKNOWN: 'UNKNOWN'
}

class Sheet {
    _output = ''
    _vmix = null

    Inputs = {}

    get End() {
        if (this.CurrentInput === this.Inputs[CAMERA_END.FAR][CAMERA_VIEW.TOPDOWN] || this.CurrentInput === this.Inputs[CAMERA_END.FAR][CAMERA_VIEW.SPLIT]) {
            return CAMERA_END.FAR
        } else if (this.CurrentInput === this.Inputs[CAMERA_END.NEAR][CAMERA_VIEW.TOPDOWN] || this.CurrentInput === this.Inputs[CAMERA_END.NEAR][CAMERA_VIEW.SPLIT]) {
            return CAMERA_END.NEAR
        } else {
            return CAMERA_END.UNKNOWN;
        }
    }

    get View() {
        if (this.CurrentInput === this.Inputs[CAMERA_END.FAR][CAMERA_VIEW.SPLIT] || this.CurrentInput === this.Inputs[CAMERA_END.NEAR][CAMERA_VIEW.SPLIT]) {
            return CAMERA_VIEW.SPLIT
        } else if (this.CurrentInput === this.Inputs[CAMERA_END.FAR][CAMERA_VIEW.TOPDOWN] || this.CurrentInput === this.Inputs[CAMERA_END.NEAR][CAMERA_VIEW.TOPDOWN]) {
            return CAMERA_VIEW.TOPDOWN
        } else {
            return CAMERA_VIEW.UNKNOWN
        }
    }

    get CurrentInput() {
        return this._vmix[this._output];
    }

    constructor(vmix, output, far_top_input, far_split_input, near_top_input, near_split_input) {
        this.Inputs = {
            [CAMERA_END.FAR]: {
                [CAMERA_VIEW.TOPDOWN]: far_top_input,
                [CAMERA_VIEW.SPLIT]: far_split_input
            },
            [CAMERA_END.NEAR]: {
                [CAMERA_VIEW.TOPDOWN]: near_top_input,
                [CAMERA_VIEW.SPLIT]: near_split_input
            }
        }
        this._output = output;
        this._vmix = vmix;
        makeAutoObservable(this)
    }
}

export const VMix  = new VmixState()

export const Sheets = {
    1: new Sheet(VMix, 'Output2', 'far_top_1', 'far_split_1', 'near_top_1', 'near_split_1'),
    2: new Sheet(VMix, 'Output3', 'far_top_2', 'far_split_2', 'near_top_2', 'near_split_2'),
    3: new Sheet(VMix, 'Output4', 'far_top_3', 'far_split_3', 'near_top_3', 'near_split_3')
}