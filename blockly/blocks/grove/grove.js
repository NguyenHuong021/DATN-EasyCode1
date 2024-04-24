

Blockly.Blocks['robocarv2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.robocarv2);
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kcbot_motor_phenikaa'] = {
  init: function() {
    this.appendValueInput("ID")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_phenikee_id)
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_phenikee_tien)
        .appendField(new Blockly.FieldDropdown([["Tiến","1"], ["lùi","0"]]), "MOTOR")
    this.appendValueInput("SPEED")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_motor_speed)
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_run_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.kcbot_run_forward,"0"], [Blockly.Msg.kcbot_run_back,"1"], [Blockly.Msg.kcbot_run_left,"2"], [Blockly.Msg.kcbot_run_right,"3"]]), "MOTOR")
    this.appendValueInput("SPEED")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_run)
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_run_forward_at_sec'] = {
  init: function() {
    this.appendDummyInput()
        .appendField()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.kcbot_run_forward,"0"], [Blockly.Msg.kcbot_run_back,"1"], [Blockly.Msg.kcbot_run_left,"2"], [Blockly.Msg.kcbot_run_right,"3"]]), "MOTOR")
    this.appendValueInput("SPEED")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_run)
    this.appendValueInput("sec")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_run_forward_at_sec)
    this.appendDummyInput()
        .appendField(Blockly.Msg.sec);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_stop_moving'] = {
  init: function() {
    this.appendDummyInput()   
        .appendField(Blockly.Msg.kcbot_stop_moving)
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_bluetooth'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Điều khiển bluetooth");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kcbot_ledrgb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_ledrgb)
        .appendField(new Blockly.FieldDropdown([["Tất cả","7"],["Led 1","0"], ["led 2","1"], ["led 3","2"], ["led 4","3"], ["led 5","4"], ["led 6","5"], ["led 7","6"]]), "slectMode")
        this.appendValueInput("red")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_ledrgb_red)
        this.appendValueInput("green")
        .setCheck("Number") 
        .appendField(Blockly.Msg.kcbot_ledrgb_green)
        this.appendValueInput("blue")
        .setCheck("Number") 
        .appendField(Blockly.Msg.kcbot_ledrgb_blue)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kcbot_servo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_servo_setup)
        .appendField(new Blockly.FieldDropdown([["S1","1"], ["S2","0"], ["S3","2"], ["S4","3"]]), "servo")
        .appendField(Blockly.Msg.kcbot_servo_angle)
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kcbot_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_tone_note)
        .appendField(new Blockly.FieldDropdown([["B0","31"],["C1","33"],["D1","37"],["E1","41"],["F1","44"],["G1","49"],["A1","55"],["B1","62"],["C2","65"],["D2","73"],["E2","82"],["F2","87"],["G2","98"],["A2","110"],["B2","123"],["C3","131"],["D3","147"],["E3","165"],["F3","175"],["G3","196"],["A3","220"],["B3","247"],["C4","262"],["D4","294"],["E4","330"],["F4","349"],["G4","392"],["A4","440"],["B4","494"],["C5","523"],["D5","587"],["E5","659"],["F5","698"],["G5","784"],["A5","880"],["B5","988"],["C6","1047"],["D6","1175"],["E6","1319"],["F6","1397"],["G6","1568"],["A6","1760"],["B6","1976"],["C7","2093"],["D7","2349"],["E7","2637"],["F7","2794"],["G7","3136"],["A7","3520"],["B7","3951"],["C8","4186"],["D8","4699"]]), "note")
        .appendField(Blockly.Msg.kcbot_tone)
        .appendField(new Blockly.FieldDropdown([["Halft","500"], ["Phần tư","250"], ["Thứ tám","125"], ["Whole","1000"], ["Double","2000"], ["0","0"]]), "tone");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
}
Blockly.Blocks['kcbot_lcd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_lcd_dia_chi)
        .appendField(new Blockly.FieldDropdown([["0x27","0x27"], ["0x3F","0x3F"]]), "data")
    this.appendValueInput("text")
        .setCheck(null)
        .appendField(Blockly.Msg.kcbot_lcd_display);
    this.appendValueInput("x")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.kcbot_lcd_pos);
    this.appendValueInput("y")
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#844957");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kcbot_lcd_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_lcd_clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#844957");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kcbot_rtc_set_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_rtc_set_time)
        .appendField(new Blockly.FieldNumber(1, 0, 23, 1), "hour")
        .appendField(":")
        .appendField(new Blockly.FieldNumber(1, 0, 59, 1), "min")
        .appendField(":")
        .appendField(new Blockly.FieldNumber(1, 0, 59, 1), "sec")
        .appendField(Blockly.Msg.kcbot_rtc_set_time_dayofweek )
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.kcbot_rtc_set_time_sun,"8"], [Blockly.Msg.kcbot_rtc_set_time_mon,"2"], [Blockly.Msg.kcbot_rtc_set_time_tues,"3"], [Blockly.Msg.kcbot_rtc_set_time_wed,"4"], [Blockly.Msg.kcbot_rtc_set_time_thur,"5"], [Blockly.Msg.kcbot_rtc_set_time_fri,"6"], [Blockly.Msg.kcbot_rtc_set_time_sat,"7"]]), "week")
        .appendField(new Blockly.FieldNumber(1, 0, 31, 1), "day")
        .appendField("-")
        .appendField(new Blockly.FieldNumber(1, 0, 12, 1), "month")
        .appendField("-")
        .appendField(new Blockly.FieldNumber(2018, 0, Infinity, 1), "year")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kcbot_rtc_update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_rtc_update);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kcbot_rtc_read_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_rtc_read_time);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kcbot_rtc_read_date'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_rtc_read_date);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kcbot_readlm35'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_readlm35)
        .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"], ["A6","A6"], ["A7","A7"]]), "MOTOR")
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};
Blockly.Blocks['kcbot_read_Doam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_read_Doam)
        .appendField(new Blockly.FieldDropdown([["A0","A0"], ["A1","A1"], ["A2","A2"], ["A3","A3"], ["A4","A4"], ["A5","A5"], ["A6","A6"], ["A7","A7"]]), "MOTOR")
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};
Blockly.Blocks['kcbot_dht11_humi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_dht11_read)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.kcbot_dht11_humi,"1"], [Blockly.Msg.kcbot_dht11_temp,"2"]]), "MOTOR")
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_dht11_pin)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
        //.appendField(Blockly.Msg.ARD_WRITE_TO)
        //.setCheck(Blockly.Types.NUMBER.output);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  },
    updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'pwmPins');
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};
Blockly.Blocks['kcbot_Irrecive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IR");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};
Blockly.Blocks['kcbot_read_irf'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_getIr)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.kcbot_getIr_k1, '1'], [Blockly.Msg.kcbot_getIr_k2, '2'], [Blockly.Msg.kcbot_getIr_k3, '3'], [Blockly.Msg.kcbot_getIr_k4, '4'], [Blockly.Msg.kcbot_getIr_k5, '5'], [Blockly.Msg.kcbot_getIr_k6, '6'], [Blockly.Msg.kcbot_getIr_k7, '7']]),'STATE1');
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_getIr_key)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.kcbot_getIr_key_go, '1'], [Blockly.Msg.kcbot_getIr_key_back, '2'], [Blockly.Msg.kcbot_getIr_key_right, '3'], [Blockly.Msg.kcbot_getIr_key_left, '4'], [Blockly.Msg.kcbot_getIr_key_f2, '6'], [Blockly.Msg.kcbot_getIr_key_f4, '7'], [Blockly.Msg.kcbot_getIr_key_f6, '8']]),'STATE2');
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};
Blockly.Blocks['kcbot_read_data_ir'] = {
  init: function() {
    this.appendValueInput("trig")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_read_data_ir)
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};

Blockly.Blocks['kcbot_ultrasonic'] = {
  init: function() {
    this.appendValueInput("trig")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_ultrasonic_trig)
    this.appendValueInput("echo")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_ultrasonic_echo)
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};
Blockly.Blocks['kcbot_rtc_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_rtc_read)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.kcbot_rtc_read_hour,"0"], [Blockly.Msg.kcbot_rtc_read_min,"1"], [Blockly.Msg.kcbot_rtc_read_sec,"2"], [Blockly.Msg.kcbot_rtc_read_dayofweek,"3"], [Blockly.Msg.kcbot_rtc_read_date,"4"], [Blockly.Msg.kcbot_rtc_read_month,"5"], [Blockly.Msg.kcbot_rtc_read_year,"6"]]), "value");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_Serial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_Serial_read)
        .appendField();
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.serial.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
},
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};
Blockly.Blocks['kcbot_apikey'] = {
 init: function() {
    this.appendValueInput("text")
        .setCheck(null)
        .appendField("APIkey gửi:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_123'] = {
  init: function() {
    this.appendValueInput('text')
        .setCheck(null)
        .appendField(Blockly.Msg.kcbot_123);
    this.appendValueInput('text1')
        .setCheck(null)
        .appendField(Blockly.Msg.kcbot_mat);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_trans'] = {
  init: function() {
    this.appendValueInput('text')
        .setCheck(null)
        .appendField(Blockly.Msg.kcbot_trans_name);
    this.appendValueInput('text1')
        .setCheck(null)
        .appendField(Blockly.Msg.kcbot_trans_pass);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_web'] = {
  init: function() {
    this.appendValueInput('text')
        .setCheck(null)
        .appendField("Tạo nút tên");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_web_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "value");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_Blynk'] = {
  init: function() {
        this.appendValueInput("text")
        .setCheck(null)   
        .appendField(Blockly.Msg.kcbot_Blynk_Api)
        this.appendValueInput("text1")
        .setCheck(null)
        .appendField(Blockly.Msg.kcbot_Blynk_Name)
        this.appendValueInput("text2")
        .setCheck(null)
        .appendField(Blockly.Msg.kcbot_Blynk_Pass)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_Blynk_tran'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Gửi lên cổng")
        .appendField(new Blockly.FieldDropdown([["V0","V0"], ["V1","V1"], ["V2","V2"], ["V3","V3"], ["V4","V4"], ["V5","V5"], ["V6","V6"], ["V7","V7"], ["V8","V8"], ["V9","V9"]]), "com")
        this.appendValueInput("y")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("Dữ liệu");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_web_kidscode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dữ liệu nhận được")
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_thing'] = {
 init: function() {
    this.appendValueInput("x")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.kcbot_api);
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_bang)
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"]]), "bang")
    this.appendValueInput("text")
        .setCheck(null)
        .appendField(Blockly.Msg.kcbot_Write);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
}
};
Blockly.Blocks['kcbot_sotrungvi'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField(Blockly.Msg.kcbot_sotrungvi);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_tds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Đọc giá trị TDS tại các chân (A0, D2, D5)')
        .appendField();
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_tdssai'] = {
  init: function() {
    this.appendValueInput('text')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("Giá trị sai số");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['kcbot_nhietdo'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_nhietdo)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setColour('#00abd6');
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};
Blockly.Blocks['kcbot_hieuchinh'] = {
  init: function() {
    this.appendValueInput('text')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("Giá trị hiệu chỉnh");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['loop_forever'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.loop_forever);
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField(Blockly.Msg.loop_forever_do);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setColour('#FFAB19');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kcbot_readDS18b20'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_readDS18b20)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
            //Blockly.Arduino.Boards.selected.digitalPins_esp32;
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};


var Analog_pin_esp32 = [
  ['2', '2'],
  ['4', '4'],
  ['12', '12'],
  ['13', '13'],
  ['14', '14'],
  ['15', '15'],
  ['25', '25'],
  ['26', '26'],
  ['27', '27'],
  ['32', '32'],
  ['33', '33'],
  ['34', '34'],
  ['35', '35'],
  ['36', '36'],
  ['39', '39']
];

var Digital_pin_esp32 = [
  ['2', '2'],
  ['4', '4'],
  ['5', '5'],
  ['15', '15'],
  ['13', '13'],
  ['12', '12'],
  ['14', '14'],
  ['16', '16'],
  ['17', '17'],
  ['18', '18'],
  ['19', '19'],
  ['21', '21'],
  ['22', '22'],
  ['23', '23'],
  ['26', '26'],
  ['27', '27'],
  ['25', '25'],
  ['33', '33'],
  ['32', '32'],
  ['35', '35'],
  ['34', '34'],
  ['36', '36'],
  ['39', '39']
];


Blockly.Blocks['kcbot_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.kcbot_motor_motor)
        .appendField(new Blockly.FieldDropdown([["M1","0"], ["M2","1"]]), "MOTOR")
    this.appendValueInput("SPEED")
        .setCheck("Number")    
        .appendField(Blockly.Msg.kcbot_motor_speed)
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour('#00abd6');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// ---------------------------------------Airsense----------------------------------------
Blockly.Blocks['AirsenseReadTempBME280'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.AirsenseReadTempBME280)
      .appendField("SDA")
      .appendField(new Blockly.FieldDropdown(Digital_pin_esp32), "I2C_port_SDA")
      .appendField("SCL")
      .appendField(new Blockly.FieldDropdown(Digital_pin_esp32), "I2C_port_SCL")
  this.setColour('#00abd6');
  this.setInputsInline(true);
  this.setNextStatement(true, null);
  this.setTooltip("");
  this.setHelpUrl("");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};

var nameTask = ["Nhiệm vụ 1"];

Blockly.Blocks['freeRTOS'] = {
    init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.freeRTOS)
        
        .appendField(new Blockly.FieldTextInput(nameTask), "Name task")
      
    this.setColour('#00abd6');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    },
    getBlockType: function() {
      return Blockly.Types.NUMBER;
    },
  };


Blockly.Blocks['AirsenseReadPMS7003'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.AirsenseReadPMS7003)
        
    this.setColour('#00abd6');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    },
    getBlockType: function() {
      return Blockly.Types.NUMBER;
    },


}