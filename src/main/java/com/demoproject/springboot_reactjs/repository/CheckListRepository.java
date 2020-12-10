package com.demoproject.springboot_reactjs.repository;

import com.demoproject.springboot_reactjs.entity.CheckList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckListRepository extends JpaRepository<CheckList,String> {
}
