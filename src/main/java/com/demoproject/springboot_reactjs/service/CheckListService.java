package com.demoproject.springboot_reactjs.service;

import com.demoproject.springboot_reactjs.entity.CheckList;

import java.util.List;

public interface CheckListService {
    List<CheckList> getMeetingCheckList();

    CheckList getMeetingChecklistById( String id);

    CheckList addNewMeetingChecklist(CheckList ch);

    CheckList editExistingMeetingCheckList(CheckList ch, String id);

    void deleteMeetingCheckList (String id);
}
