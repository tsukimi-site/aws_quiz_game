#!/usr/bin/env python3
"""
Quiz Generator - YAMLファイルからクイズアプリケーションを生成
"""

import os
import yaml
import json
from pathlib import Path

def load_quiz_data():
    """questionsフォルダからYAMLファイルを読み込み、クイズデータを生成"""
    quiz_data = {}
    questions_dir = Path("questions")
    
    if not questions_dir.exists():
        print("questionsフォルダが見つかりません")
        return quiz_data
    
    for yaml_file in questions_dir.glob("*.yaml"):
        try:
            with open(yaml_file, 'r', encoding='utf-8') as f:
                data = yaml.safe_load(f)
                
            course_title = data['course_detail']['title']
            quiz_data[course_title] = {
                'course_detail': data['course_detail'],
                'questions': data['questions']
            }
            print(f"読み込み完了: {course_title}")
            
        except Exception as e:
            print(f"エラー: {yaml_file} - {e}")
    
    return quiz_data

def generate_html_files(quiz_data):
    """HTMLファイルを生成"""
    docs_dir = Path("docs")
    docs_dir.mkdir(exist_ok=True)
    
    # quiz_data.jsを生成（全問題データを含む）
    with open(docs_dir / "quiz_data.js", 'w', encoding='utf-8') as f:
        f.write(f"const QUIZ_DATA = {json.dumps(quiz_data, ensure_ascii=False, indent=2)};")
    
    print("quiz_data.js を生成しました（全問題データを含む）")

if __name__ == "__main__":
    print("クイズデータを読み込み中...")
    quiz_data = load_quiz_data()
    
    if quiz_data:
        print(f"{len(quiz_data)}個のコースを読み込みました")
        generate_html_files(quiz_data)
        print("HTMLファイルの生成が完了しました")
    else:
        print("クイズデータが見つかりませんでした")
