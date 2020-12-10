package com.demoproject.springboot_reactjs.controller;

import com.demoproject.springboot_reactjs.entity.CheckList;
import com.demoproject.springboot_reactjs.service.CheckListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin
public class entityController {
    @Autowired
    CheckListService checkListService;

   @GetMapping("/meeting-checklist")
    public List<CheckList> getMeetingCheckList(){
       return checkListService.getMeetingCheckList();
   }
   @GetMapping("/meeting-checklist/{id}")
    public CheckList getMeetingCheckListById(@PathVariable("id") String id){
       return checkListService.getMeetingChecklistById(id);
   }
   @PostMapping("/add-meeting")
    public CheckList addMeetingCheckList(@RequestBody CheckList ch){
       return checkListService.addNewMeetingChecklist(ch);
   }

   @PutMapping("/edit-checklist/{id}")
    public CheckList editmeetingCheckList(@RequestBody CheckList ch,@PathVariable ("id") String id){
       return checkListService.editExistingMeetingCheckList(ch,id);
   }
   @DeleteMapping("/delete-checklist/{id}")
    public void deleteMeeting(@PathVariable("id")String id){
       checkListService.deleteMeetingCheckList(id);
   }
}
